# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { SlidesPresentationsBatchUpdateRequest, SlidesPresentationsBatchUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SlidesPresentationsBatchUpdateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    presentationId: "labore",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "a",
    alt: "proto",
    callback: "ipsa",
    fields: "enim",
    key: "magni",
    oauthToken: "sequi",
    prettyPrint: true,
    quotaUser: "omnis",
    uploadType: "adipisci",
    uploadProtocol: "at",
  },
  request: {
    requests: [
      {
        createImage: {
          elementProperties: {
            pageObjectId: "suscipit",
            size: {
              height: {
                magnitude: 72.099998,
                unit: "EMU",
              },
              width: {
                magnitude: 38.200001,
                unit: "PT",
              },
            },
            transform: {
              scaleX: 83.199997,
              scaleY: 45.099998,
              shearX: 65.099998,
              shearY: 66.099998,
              translateX: 10.100000,
              translateY: 38.200001,
              unit: "EMU",
            },
          },
          objectId: "aut",
          url: "quod",
        },
        createLine: {
          category: "CURVED",
          elementProperties: {
            pageObjectId: "commodi",
            size: {
              height: {
                magnitude: 30.100000,
                unit: "EMU",
              },
              width: {
                magnitude: 8.200000,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            transform: {
              scaleX: 98.099998,
              scaleY: 63.099998,
              shearX: 13.100000,
              shearY: 30.100000,
              translateX: 32.200001,
              translateY: 46.200001,
              unit: "UNIT_UNSPECIFIED",
            },
          },
          lineCategory: "BENT",
          objectId: "veniam",
        },
        createParagraphBullets: {
          bulletPreset: "BULLET_DIAMONDX_ARROW3D_SQUARE",
          cellLocation: {
            columnIndex: 3736691920150480751,
            rowIndex: 256816899672954969,
          },
          objectId: "sequi",
          textRange: {
            endIndex: 4731195890828409434,
            startIndex: 5530545631762220145,
            type: "ALL",
          },
        },
        createShape: {
          elementProperties: {
            pageObjectId: "est",
            size: {
              height: {
                magnitude: 6.200000,
                unit: "PT",
              },
              width: {
                magnitude: 56.099998,
                unit: "PT",
              },
            },
            transform: {
              scaleX: 13.200000,
              scaleY: 79.099998,
              shearX: 85.099998,
              shearY: 81.199997,
              translateX: 6.200000,
              translateY: 18.100000,
              unit: "EMU",
            },
          },
          objectId: "distinctio",
          shapeType: "MATH_MINUS",
        },
        createSheetsChart: {
          chartId: 4091678161853246892,
          elementProperties: {
            pageObjectId: "fuga",
            size: {
              height: {
                magnitude: 42.200001,
                unit: "EMU",
              },
              width: {
                magnitude: 88.199997,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            transform: {
              scaleX: 25.200001,
              scaleY: 74.199997,
              shearX: 29.200001,
              shearY: 46.099998,
              translateX: 94.199997,
              translateY: 32.200001,
              unit: "EMU",
            },
          },
          linkingMode: "LINKED",
          objectId: "maxime",
          spreadsheetId: "in",
        },
        createSlide: {
          insertionIndex: 7933490707002905300,
          objectId: "accusantium",
          placeholderIdMappings: [
            {
              layoutPlaceholder: {
                index: 5698348303297314090,
                parentObjectId: "voluptates",
                type: "TITLE",
              },
              layoutPlaceholderObjectId: "natus",
              objectId: "perspiciatis",
            },
            {
              layoutPlaceholder: {
                index: 9145339099388304453,
                parentObjectId: "in",
                type: "CENTERED_TITLE",
              },
              layoutPlaceholderObjectId: "sed",
              objectId: "magnam",
            },
            {
              layoutPlaceholder: {
                index: 2670941312767507050,
                parentObjectId: "praesentium",
                type: "DATE_AND_TIME",
              },
              layoutPlaceholderObjectId: "nesciunt",
              objectId: "tempore",
            },
          ],
          slideLayoutReference: {
            layoutId: "corporis",
            predefinedLayout: "TITLE_ONLY",
          },
        },
        createTable: {
          columns: 7446839717505081825,
          elementProperties: {
            pageObjectId: "est",
            size: {
              height: {
                magnitude: 76.099998,
                unit: "UNIT_UNSPECIFIED",
              },
              width: {
                magnitude: 19.100000,
                unit: "PT",
              },
            },
            transform: {
              scaleX: 28.200001,
              scaleY: 14.100000,
              shearX: 53.200001,
              shearY: 48.099998,
              translateX: 16.100000,
              translateY: 85.099998,
              unit: "EMU",
            },
          },
          objectId: "excepturi",
          rows: 1454351304728694820,
        },
        createVideo: {
          elementProperties: {
            pageObjectId: "distinctio",
            size: {
              height: {
                magnitude: 96.099998,
                unit: "PT",
              },
              width: {
                magnitude: 11.200000,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            transform: {
              scaleX: 62.099998,
              scaleY: 38.200001,
              shearX: 97.199997,
              shearY: 98.099998,
              translateX: 9.200000,
              translateY: 59.200001,
              unit: "UNIT_UNSPECIFIED",
            },
          },
          id: "voluptas",
          objectId: "placeat",
          source: "DRIVE",
        },
        deleteObject: {
          objectId: "voluptate",
        },
        deleteParagraphBullets: {
          cellLocation: {
            columnIndex: 9128093316011588625,
            rowIndex: 8538216581222554838,
          },
          objectId: "praesentium",
          textRange: {
            endIndex: 8969389201800069022,
            startIndex: 5652167882464335710,
            type: "FROM_START_INDEX",
          },
        },
        deleteTableColumn: {
          cellLocation: {
            columnIndex: 4114836779377855555,
            rowIndex: 5416331590569338403,
          },
          tableObjectId: "autem",
        },
        deleteTableRow: {
          cellLocation: {
            columnIndex: 275289112235760504,
            rowIndex: 4363797310786581912,
          },
          tableObjectId: "voluptate",
        },
        deleteText: {
          cellLocation: {
            columnIndex: 8667631553481974165,
            rowIndex: 4961393487022594461,
          },
          objectId: "incidunt",
          textRange: {
            endIndex: 8942438308201148224,
            startIndex: 2056496640829951689,
            type: "ALL",
          },
        },
        duplicateObject: {
          objectId: "commodi",
          objectIds: {
            "sed": "pariatur",
          },
        },
        groupObjects: {
          childrenObjectIds: [
            "minima",
            "voluptatem",
            "sapiente",
          ],
          groupObjectId: "et",
        },
        insertTableColumns: {
          cellLocation: {
            columnIndex: 8462435958871768855,
            rowIndex: 3873327989389991279,
          },
          insertRight: false,
          number: 2123091950249552974,
          tableObjectId: "ut",
        },
        insertTableRows: {
          cellLocation: {
            columnIndex: 8489753372318784578,
            rowIndex: 291663365006524027,
          },
          insertBelow: true,
          number: 5842499702562799798,
          tableObjectId: "omnis",
        },
        insertText: {
          cellLocation: {
            columnIndex: 439513275679668075,
            rowIndex: 2799700021731961101,
          },
          insertionIndex: 6642823146424394754,
          objectId: "sint",
          text: "et",
        },
        mergeTableCells: {
          objectId: "debitis",
          tableRange: {
            columnSpan: 2058983986735451081,
            location: {
              columnIndex: 2319182427077478158,
              rowIndex: 593929477305317465,
            },
            rowSpan: 7770107104650922199,
          },
        },
        refreshSheetsChart: {
          objectId: "esse",
        },
        replaceAllShapesWithImage: {
          containsText: {
            matchCase: true,
            text: "debitis",
          },
          imageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
          imageUrl: "quod",
          pageObjectIds: [
            "molestiae",
            "soluta",
          ],
          replaceMethod: "CENTER_CROP",
        },
        replaceAllShapesWithSheetsChart: {
          chartId: 4802422051045243320,
          containsText: {
            matchCase: true,
            text: "laboriosam",
          },
          linkingMode: "NOT_LINKED_IMAGE",
          pageObjectIds: [
            "est",
            "nihil",
          ],
          spreadsheetId: "excepturi",
        },
        replaceAllText: {
          containsText: {
            matchCase: false,
            text: "corrupti",
          },
          pageObjectIds: [
            "tempora",
          ],
          replaceText: "temporibus",
        },
        replaceImage: {
          imageObjectId: "explicabo",
          imageReplaceMethod: "CENTER_INSIDE",
          url: "fugit",
        },
        rerouteLine: {
          objectId: "possimus",
        },
        ungroupObjects: {
          objectIds: [
            "iure",
            "quasi",
            "aut",
          ],
        },
        unmergeTableCells: {
          objectId: "ipsam",
          tableRange: {
            columnSpan: 6485346902768298460,
            location: {
              columnIndex: 5084119486654811769,
              rowIndex: 3751860644395722023,
            },
            rowSpan: 5403918693028076812,
          },
        },
        updateImageProperties: {
          fields: "tempore",
          imageProperties: {
            brightness: 4.100000,
            contrast: 22.200001,
            cropProperties: {
              angle: 94.099998,
              bottomOffset: 24.200001,
              leftOffset: 15.100000,
              rightOffset: 71.099998,
              topOffset: 90.099998,
            },
            link: {
              pageObjectId: "asperiores",
              relativeLink: "LAST_SLIDE",
              slideIndex: 5320300553641220446,
              url: "inventore",
            },
            outline: {
              dashStyle: "DASH",
              outlineFill: {
                solidFill: {
                  alpha: 51.200001,
                  color: {
                    rgbColor: {
                      blue: 46.200001,
                      green: 40.200001,
                      red: 62.099998,
                    },
                    themeColor: "TEXT2",
                  },
                },
              },
              propertyState: "INHERIT",
              weight: {
                magnitude: 84.099998,
                unit: "PT",
              },
            },
            recolor: {
              name: "LIGHT10",
              recolorStops: [
                {
                  alpha: 71.199997,
                  color: {
                    rgbColor: {
                      blue: 65.099998,
                      green: 65.199997,
                      red: 5.200000,
                    },
                    themeColor: "ACCENT5",
                  },
                  position: 17.200001,
                },
                {
                  alpha: 60.200001,
                  color: {
                    rgbColor: {
                      blue: 14.200000,
                      green: 30.100000,
                      red: 82.199997,
                    },
                    themeColor: "LIGHT2",
                  },
                  position: 50.200001,
                },
                {
                  alpha: 73.199997,
                  color: {
                    rgbColor: {
                      blue: 99.199997,
                      green: 11.100000,
                      red: 44.200001,
                    },
                    themeColor: "TEXT2",
                  },
                  position: 32.200001,
                },
              ],
            },
            shadow: {
              alignment: "LEFT_CENTER",
              alpha: 54.200001,
              blurRadius: {
                magnitude: 56.200001,
                unit: "EMU",
              },
              color: {
                rgbColor: {
                  blue: 0.100000,
                  green: 74.199997,
                  red: 82.199997,
                },
                themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
              },
              propertyState: "RENDERED",
              rotateWithShape: false,
              transform: {
                scaleX: 8.100000,
                scaleY: 1.100000,
                shearX: 97.199997,
                shearY: 13.200000,
                translateX: 2.200000,
                translateY: 18.200001,
                unit: "UNIT_UNSPECIFIED",
              },
              type: "OUTER",
            },
            transparency: 5.200000,
          },
          objectId: "et",
        },
        updateLineCategory: {
          lineCategory: "STRAIGHT",
          objectId: "saepe",
        },
        updateLineProperties: {
          fields: "quis",
          lineProperties: {
            dashStyle: "SOLID",
            endArrow: "OPEN_SQUARE",
            endConnection: {
              connectedObjectId: "molestias",
              connectionSiteIndex: 4753809438213307351,
            },
            lineFill: {
              solidFill: {
                alpha: 35.099998,
                color: {
                  rgbColor: {
                    blue: 41.200001,
                    green: 55.099998,
                    red: 6.100000,
                  },
                  themeColor: "LIGHT2",
                },
              },
            },
            link: {
              pageObjectId: "hic",
              relativeLink: "RELATIVE_SLIDE_LINK_UNSPECIFIED",
              slideIndex: 5403992064409020394,
              url: "odio",
            },
            startArrow: "FILL_SQUARE",
            startConnection: {
              connectedObjectId: "est",
              connectionSiteIndex: 5649116748573825976,
            },
            weight: {
              magnitude: 60.200001,
              unit: "PT",
            },
          },
          objectId: "et",
        },
        updatePageElementAltText: {
          description: "vitae",
          objectId: "ut",
          title: "dolor",
        },
        updatePageElementTransform: {
          applyMode: "APPLY_MODE_UNSPECIFIED",
          objectId: "et",
          transform: {
            scaleX: 80.099998,
            scaleY: 92.199997,
            shearX: 45.200001,
            shearY: 82.099998,
            translateX: 89.199997,
            translateY: 50.200001,
            unit: "EMU",
          },
        },
        updatePageElementsZOrder: {
          operation: "SEND_BACKWARD",
          pageElementObjectIds: [
            "vitae",
            "quia",
          ],
        },
        updatePageProperties: {
          fields: "dolores",
          objectId: "non",
          pageProperties: {
            colorScheme: {
              colors: [
                {
                  color: {
                    blue: 21.100000,
                    green: 39.099998,
                    red: 26.100000,
                  },
                  type: "ACCENT2",
                },
                {
                  color: {
                    blue: 77.199997,
                    green: 84.199997,
                    red: 33.200001,
                  },
                  type: "ACCENT3",
                },
              ],
            },
            pageBackgroundFill: {
              propertyState: "INHERIT",
              solidFill: {
                alpha: 78.099998,
                color: {
                  rgbColor: {
                    blue: 30.200001,
                    green: 80.199997,
                    red: 45.200001,
                  },
                  themeColor: "LIGHT2",
                },
              },
              stretchedPictureFill: {
                contentUrl: "soluta",
                size: {
                  height: {
                    magnitude: 54.200001,
                    unit: "EMU",
                  },
                  width: {
                    magnitude: 86.199997,
                    unit: "PT",
                  },
                },
              },
            },
          },
        },
        updateParagraphStyle: {
          cellLocation: {
            columnIndex: 8283007054411788056,
            rowIndex: 6392346161157208595,
          },
          fields: "aspernatur",
          objectId: "quia",
          style: {
            alignment: "ALIGNMENT_UNSPECIFIED",
            direction: "TEXT_DIRECTION_UNSPECIFIED",
            indentEnd: {
              magnitude: 74.199997,
              unit: "UNIT_UNSPECIFIED",
            },
            indentFirstLine: {
              magnitude: 71.199997,
              unit: "EMU",
            },
            indentStart: {
              magnitude: 94.199997,
              unit: "PT",
            },
            lineSpacing: 32.099998,
            spaceAbove: {
              magnitude: 20.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            spaceBelow: {
              magnitude: 46.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            spacingMode: "NEVER_COLLAPSE",
          },
          textRange: {
            endIndex: 1465524577445176,
            startIndex: 3749598124284455625,
            type: "FIXED_RANGE",
          },
        },
        updateShapeProperties: {
          fields: "veniam",
          objectId: "qui",
          shapeProperties: {
            autofit: {
              autofitType: "TEXT_AUTOFIT",
              fontScale: 35.099998,
              lineSpacingReduction: 1.100000,
            },
            contentAlignment: "TOP",
            link: {
              pageObjectId: "earum",
              relativeLink: "LAST_SLIDE",
              slideIndex: 3904774084427647867,
              url: "ut",
            },
            outline: {
              dashStyle: "LONG_DASH_DOT",
              outlineFill: {
                solidFill: {
                  alpha: 60.200001,
                  color: {
                    rgbColor: {
                      blue: 59.099998,
                      green: 30.100000,
                      red: 90.199997,
                    },
                    themeColor: "LIGHT1",
                  },
                },
              },
              propertyState: "NOT_RENDERED",
              weight: {
                magnitude: 55.099998,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            shadow: {
              alignment: "BOTTOM_CENTER",
              alpha: 90.199997,
              blurRadius: {
                magnitude: 90.099998,
                unit: "UNIT_UNSPECIFIED",
              },
              color: {
                rgbColor: {
                  blue: 21.100000,
                  green: 50.200001,
                  red: 89.099998,
                },
                themeColor: "LIGHT1",
              },
              propertyState: "NOT_RENDERED",
              rotateWithShape: false,
              transform: {
                scaleX: 57.200001,
                scaleY: 22.200001,
                shearX: 96.199997,
                shearY: 49.099998,
                translateX: 27.100000,
                translateY: 56.099998,
                unit: "PT",
              },
              type: "SHADOW_TYPE_UNSPECIFIED",
            },
            shapeBackgroundFill: {
              propertyState: "RENDERED",
              solidFill: {
                alpha: 86.199997,
                color: {
                  rgbColor: {
                    blue: 99.199997,
                    green: 19.200001,
                    red: 44.099998,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
              },
            },
          },
        },
        updateSlideProperties: {
          fields: "et",
          objectId: "ea",
          slideProperties: {
            isSkipped: false,
            layoutObjectId: "qui",
            masterObjectId: "et",
            notesPage: {
            
            },
          },
        },
        updateSlidesPosition: {
          insertionIndex: 5535217212110569389,
          slideObjectIds: [
            "et",
            "eveniet",
          ],
        },
        updateTableBorderProperties: {
          borderPosition: "LEFT",
          fields: "et",
          objectId: "tenetur",
          tableBorderProperties: {
            dashStyle: "DASH",
            tableBorderFill: {
              solidFill: {
                alpha: 83.199997,
                color: {
                  rgbColor: {
                    blue: 50.099998,
                    green: 78.099998,
                    red: 62.099998,
                  },
                  themeColor: "ACCENT3",
                },
              },
            },
            weight: {
              magnitude: 57.099998,
              unit: "PT",
            },
          },
          tableRange: {
            columnSpan: 3922859791132572546,
            location: {
              columnIndex: 1396610286591386519,
              rowIndex: 4342240267582167730,
            },
            rowSpan: 7321073256990245520,
          },
        },
        updateTableCellProperties: {
          fields: "in",
          objectId: "eveniet",
          tableCellProperties: {
            contentAlignment: "BOTTOM",
            tableCellBackgroundFill: {
              propertyState: "RENDERED",
              solidFill: {
                alpha: 10.100000,
                color: {
                  rgbColor: {
                    blue: 80.199997,
                    green: 64.199997,
                    red: 16.200001,
                  },
                  themeColor: "BACKGROUND1",
                },
              },
            },
          },
          tableRange: {
            columnSpan: 3288954744603557144,
            location: {
              columnIndex: 7038266877095497271,
              rowIndex: 1327857624535409792,
            },
            rowSpan: 4085067221554364343,
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            231083836690476843,
          ],
          fields: "commodi",
          objectId: "ut",
          tableColumnProperties: {
            columnWidth: {
              magnitude: 20.100000,
              unit: "EMU",
            },
          },
        },
        updateTableRowProperties: {
          fields: "non",
          objectId: "minima",
          rowIndices: [
            2024106265734698231,
            6671357507052119919,
            4908978009991088654,
          ],
          tableRowProperties: {
            minRowHeight: {
              magnitude: 2.100000,
              unit: "PT",
            },
          },
        },
        updateTextStyle: {
          cellLocation: {
            columnIndex: 8168415176354109217,
            rowIndex: 7075712041504403012,
          },
          fields: "in",
          objectId: "aut",
          style: {
            backgroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 74.099998,
                  green: 30.200001,
                  red: 17.100000,
                },
                themeColor: "HYPERLINK",
              },
            },
            baselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
            bold: false,
            fontFamily: "animi",
            fontSize: {
              magnitude: 4.200000,
              unit: "UNIT_UNSPECIFIED",
            },
            foregroundColor: {
              opaqueColor: {
                rgbColor: {
                  blue: 99.099998,
                  green: 59.200001,
                  red: 41.200001,
                },
                themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
              },
            },
            italic: false,
            link: {
              pageObjectId: "voluptatibus",
              relativeLink: "NEXT_SLIDE",
              slideIndex: 1669333273599120275,
              url: "illum",
            },
            smallCaps: false,
            strikethrough: true,
            underline: true,
            weightedFontFamily: {
              fontFamily: "illum",
              weight: 7394850123376921792,
            },
          },
          textRange: {
            endIndex: 8127291500649900359,
            startIndex: 4125262407964932892,
            type: "ALL",
          },
        },
        updateVideoProperties: {
          fields: "consequatur",
          objectId: "est",
          videoProperties: {
            autoPlay: false,
            end: 5024863387575432216,
            mute: false,
            outline: {
              dashStyle: "DOT",
              outlineFill: {
                solidFill: {
                  alpha: 62.200001,
                  color: {
                    rgbColor: {
                      blue: 40.099998,
                      green: 86.199997,
                      red: 89.199997,
                    },
                    themeColor: "FOLLOWED_HYPERLINK",
                  },
                },
              },
              propertyState: "INHERIT",
              weight: {
                magnitude: 11.100000,
                unit: "PT",
              },
            },
            start: 8945656186257497847,
          },
        },
      },
    ],
    writeControl: {
      requiredRevisionId: "perferendis",
    },
  },
};

sdk.presentations.slidesPresentationsBatchUpdate(req).then((res: SlidesPresentationsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### presentations

* `slidesPresentationsBatchUpdate` - Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `slidesPresentationsCreate` - Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
* `slidesPresentationsGet` - Gets the latest version of the specified presentation.
* `slidesPresentationsPagesGet` - Gets the latest version of the specified page in the presentation.
* `slidesPresentationsPagesGetThumbnail` - Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
