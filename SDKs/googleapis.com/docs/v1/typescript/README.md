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
import { DocsDocumentsBatchUpdateRequest, DocsDocumentsBatchUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DocsDocumentsBatchUpdateRequest = {
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
    documentId: "minima",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "in",
    alt: "proto",
    callback: "excepturi",
    fields: "dolorum",
    key: "non",
    oauthToken: "sit",
    prettyPrint: true,
    quotaUser: "id",
    uploadType: "a",
    uploadProtocol: "est",
  },
  request: {
    requests: [
      {
        createFooter: {
          sectionBreakLocation: {
            index: 5366698653179862498,
            segmentId: "sunt",
          },
          type: "DEFAULT",
        },
        createFootnote: {
          endOfSegmentLocation: {
            segmentId: "adipisci",
          },
          location: {
            index: 7583338598271660861,
            segmentId: "porro",
          },
        },
        createHeader: {
          sectionBreakLocation: {
            index: 4232705511295606748,
            segmentId: "rem",
          },
          type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
        },
        createNamedRange: {
          name: "amet",
          range: {
            endIndex: 6667775191372553350,
            segmentId: "sed",
            startIndex: 6506546517535170019,
          },
        },
        createParagraphBullets: {
          bulletPreset: "NUMBERED_UPPERALPHA_ALPHA_ROMAN",
          range: {
            endIndex: 5559771435623645996,
            segmentId: "magnam",
            startIndex: 377216058500660564,
          },
        },
        deleteContentRange: {
          range: {
            endIndex: 4370872538591255524,
            segmentId: "animi",
            startIndex: 7783867136465378367,
          },
        },
        deleteFooter: {
          footerId: "error",
        },
        deleteHeader: {
          headerId: "expedita",
        },
        deleteNamedRange: {
          name: "hic",
          namedRangeId: "sint",
        },
        deleteParagraphBullets: {
          range: {
            endIndex: 3178249105209184734,
            segmentId: "cum",
            startIndex: 2513013135709289138,
          },
        },
        deletePositionedObject: {
          objectId: "est",
        },
        deleteTableColumn: {
          tableCellLocation: {
            columnIndex: 1901875206942845850,
            rowIndex: 5530559030884502915,
            tableStartLocation: {
              index: 6009880212366740645,
              segmentId: "nisi",
            },
          },
        },
        deleteTableRow: {
          tableCellLocation: {
            columnIndex: 4959327573254930506,
            rowIndex: 609779180228919533,
            tableStartLocation: {
              index: 1842414433445382149,
              segmentId: "voluptas",
            },
          },
        },
        insertInlineImage: {
          endOfSegmentLocation: {
            segmentId: "vel",
          },
          location: {
            index: 6300255120863348113,
            segmentId: "quia",
          },
          objectSize: {
            height: {
              magnitude: 28.100000,
              unit: "UNIT_UNSPECIFIED",
            },
            width: {
              magnitude: 35.099998,
              unit: "PT",
            },
          },
          uri: "aut",
        },
        insertPageBreak: {
          endOfSegmentLocation: {
            segmentId: "distinctio",
          },
          location: {
            index: 802263760626499579,
            segmentId: "pariatur",
          },
        },
        insertSectionBreak: {
          endOfSegmentLocation: {
            segmentId: "et",
          },
          location: {
            index: 5471193514497261027,
            segmentId: "est",
          },
          sectionType: "SECTION_TYPE_UNSPECIFIED",
        },
        insertTable: {
          columns: 624301117795162001,
          endOfSegmentLocation: {
            segmentId: "omnis",
          },
          location: {
            index: 4312706972528545348,
            segmentId: "explicabo",
          },
          rows: 4772767214414571830,
        },
        insertTableColumn: {
          insertRight: true,
          tableCellLocation: {
            columnIndex: 8660987552161394608,
            rowIndex: 5451374651406247552,
            tableStartLocation: {
              index: 6782756290226685504,
              segmentId: "beatae",
            },
          },
        },
        insertTableRow: {
          insertBelow: false,
          tableCellLocation: {
            columnIndex: 1247309286835258792,
            rowIndex: 5838081969234381789,
            tableStartLocation: {
              index: 2003445621514778654,
              segmentId: "alias",
            },
          },
        },
        insertText: {
          endOfSegmentLocation: {
            segmentId: "a",
          },
          location: {
            index: 6254078625334690390,
            segmentId: "tenetur",
          },
          text: "facilis",
        },
        mergeTableCells: {
          tableRange: {
            columnSpan: 4427043544170120765,
            rowSpan: 311785848772082444,
            tableCellLocation: {
              columnIndex: 8750974328945448234,
              rowIndex: 7097710149691441517,
              tableStartLocation: {
                index: 1652101197329302254,
                segmentId: "voluptatem",
              },
            },
          },
        },
        pinTableHeaderRows: {
          pinnedHeaderRowsCount: 9138005301096420624,
          tableStartLocation: {
            index: 6973057818752311221,
            segmentId: "aut",
          },
        },
        replaceAllText: {
          containsText: {
            matchCase: true,
            text: "qui",
          },
          replaceText: "quod",
        },
        replaceImage: {
          imageObjectId: "esse",
          imageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
          uri: "officiis",
        },
        replaceNamedRangeContent: {
          namedRangeId: "qui",
          namedRangeName: "ipsa",
          text: "tenetur",
        },
        unmergeTableCells: {
          tableRange: {
            columnSpan: 191219428670541487,
            rowSpan: 2214606034727780076,
            tableCellLocation: {
              columnIndex: 517354150590835448,
              rowIndex: 8251223882671096119,
              tableStartLocation: {
                index: 4209825760362988062,
                segmentId: "culpa",
              },
            },
          },
        },
        updateDocumentStyle: {
          documentStyle: {
            background: {
              color: {
                color: {
                  rgbColor: {
                    blue: 48.200001,
                    green: 46.099998,
                    red: 51.200001,
                  },
                },
              },
            },
            defaultFooterId: "illum",
            defaultHeaderId: "voluptas",
            evenPageFooterId: "ea",
            evenPageHeaderId: "velit",
            firstPageFooterId: "placeat",
            firstPageHeaderId: "amet",
            marginBottom: {
              magnitude: 70.199997,
              unit: "PT",
            },
            marginFooter: {
              magnitude: 21.200001,
              unit: "PT",
            },
            marginHeader: {
              magnitude: 36.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            marginLeft: {
              magnitude: 15.200000,
              unit: "UNIT_UNSPECIFIED",
            },
            marginRight: {
              magnitude: 60.200001,
              unit: "PT",
            },
            marginTop: {
              magnitude: 62.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            pageNumberStart: 6832840915743680141,
            pageSize: {
              height: {
                magnitude: 81.199997,
                unit: "PT",
              },
              width: {
                magnitude: 48.099998,
                unit: "PT",
              },
            },
            useCustomHeaderFooterMargins: true,
            useEvenPageHeaderFooter: true,
            useFirstPageHeaderFooter: false,
          },
          fields: "et",
        },
        updateParagraphStyle: {
          fields: "magnam",
          paragraphStyle: {
            alignment: "CENTER",
            avoidWidowAndOrphan: true,
            borderBetween: {
              color: {
                color: {
                  rgbColor: {
                    blue: 23.200001,
                    green: 86.199997,
                    red: 26.200001,
                  },
                },
              },
              dashStyle: "DOT",
              padding: {
                magnitude: 76.199997,
                unit: "PT",
              },
              width: {
                magnitude: 18.200001,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 5.200000,
                    green: 37.099998,
                    red: 87.099998,
                  },
                },
              },
              dashStyle: "DASH",
              padding: {
                magnitude: 47.200001,
                unit: "UNIT_UNSPECIFIED",
              },
              width: {
                magnitude: 61.099998,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 38.099998,
                    green: 78.199997,
                    red: 21.200001,
                  },
                },
              },
              dashStyle: "DASH_STYLE_UNSPECIFIED",
              padding: {
                magnitude: 76.199997,
                unit: "PT",
              },
              width: {
                magnitude: 58.200001,
                unit: "PT",
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 89.099998,
                    green: 85.199997,
                    red: 31.100000,
                  },
                },
              },
              dashStyle: "DOT",
              padding: {
                magnitude: 63.200001,
                unit: "PT",
              },
              width: {
                magnitude: 44.099998,
                unit: "PT",
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 99.099998,
                    green: 37.200001,
                    red: 73.099998,
                  },
                },
              },
              dashStyle: "SOLID",
              padding: {
                magnitude: 19.100000,
                unit: "PT",
              },
              width: {
                magnitude: 80.199997,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            direction: "CONTENT_DIRECTION_UNSPECIFIED",
            headingId: "aliquam",
            indentEnd: {
              magnitude: 46.200001,
              unit: "PT",
            },
            indentFirstLine: {
              magnitude: 16.100000,
              unit: "UNIT_UNSPECIFIED",
            },
            indentStart: {
              magnitude: 42.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            keepLinesTogether: true,
            keepWithNext: false,
            lineSpacing: 52.200001,
            namedStyleType: "HEADING_6",
            pageBreakBefore: true,
            shading: {
              backgroundColor: {
                color: {
                  rgbColor: {
                    blue: 72.099998,
                    green: 30.100000,
                    red: 39.099998,
                  },
                },
              },
            },
            spaceAbove: {
              magnitude: 31.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            spaceBelow: {
              magnitude: 17.200001,
              unit: "PT",
            },
            spacingMode: "NEVER_COLLAPSE",
            tabStops: [
              {
                alignment: "CENTER",
                offset: {
                  magnitude: 28.100000,
                  unit: "PT",
                },
              },
              {
                alignment: "CENTER",
                offset: {
                  magnitude: 95.099998,
                  unit: "UNIT_UNSPECIFIED",
                },
              },
            ],
          },
          range: {
            endIndex: 2873915963918454826,
            segmentId: "itaque",
            startIndex: 1126029384112494313,
          },
        },
        updateSectionStyle: {
          fields: "eligendi",
          range: {
            endIndex: 4345874154812671182,
            segmentId: "atque",
            startIndex: 4943755619326850455,
          },
          sectionStyle: {
            columnProperties: [
              {
                paddingEnd: {
                  magnitude: 27.200001,
                  unit: "UNIT_UNSPECIFIED",
                },
                width: {
                  magnitude: 26.100000,
                  unit: "UNIT_UNSPECIFIED",
                },
              },
              {
                paddingEnd: {
                  magnitude: 57.200001,
                  unit: "UNIT_UNSPECIFIED",
                },
                width: {
                  magnitude: 14.100000,
                  unit: "PT",
                },
              },
              {
                paddingEnd: {
                  magnitude: 93.099998,
                  unit: "UNIT_UNSPECIFIED",
                },
                width: {
                  magnitude: 87.199997,
                  unit: "UNIT_UNSPECIFIED",
                },
              },
            ],
            columnSeparatorStyle: "NONE",
            contentDirection: "LEFT_TO_RIGHT",
            defaultFooterId: "omnis",
            defaultHeaderId: "voluptas",
            evenPageFooterId: "sunt",
            evenPageHeaderId: "ut",
            firstPageFooterId: "consectetur",
            firstPageHeaderId: "qui",
            marginBottom: {
              magnitude: 38.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            marginFooter: {
              magnitude: 14.100000,
              unit: "UNIT_UNSPECIFIED",
            },
            marginHeader: {
              magnitude: 9.200000,
              unit: "UNIT_UNSPECIFIED",
            },
            marginLeft: {
              magnitude: 93.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            marginRight: {
              magnitude: 71.199997,
              unit: "UNIT_UNSPECIFIED",
            },
            marginTop: {
              magnitude: 97.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            pageNumberStart: 4671292837807335396,
            sectionType: "CONTINUOUS",
            useFirstPageHeaderFooter: true,
          },
        },
        updateTableCellStyle: {
          fields: "provident",
          tableCellStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 7.100000,
                  green: 76.199997,
                  red: 80.199997,
                },
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 48.099998,
                    green: 1.100000,
                    red: 24.100000,
                  },
                },
              },
              dashStyle: "SOLID",
              width: {
                magnitude: 6.100000,
                unit: "PT",
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 95.199997,
                    green: 47.200001,
                    red: 27.200001,
                  },
                },
              },
              dashStyle: "SOLID",
              width: {
                magnitude: 68.199997,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 30.200001,
                    green: 52.099998,
                    red: 74.199997,
                  },
                },
              },
              dashStyle: "DASH",
              width: {
                magnitude: 17.100000,
                unit: "PT",
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 24.200001,
                    green: 90.199997,
                    red: 75.199997,
                  },
                },
              },
              dashStyle: "DOT",
              width: {
                magnitude: 58.200001,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            columnSpan: 4955772478497671581,
            contentAlignment: "TOP",
            paddingBottom: {
              magnitude: 48.099998,
              unit: "PT",
            },
            paddingLeft: {
              magnitude: 0.200000,
              unit: "UNIT_UNSPECIFIED",
            },
            paddingRight: {
              magnitude: 38.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            paddingTop: {
              magnitude: 65.199997,
              unit: "PT",
            },
            rowSpan: 7160855961889789812,
          },
          tableRange: {
            columnSpan: 4762725760957286570,
            rowSpan: 6367887922305571310,
            tableCellLocation: {
              columnIndex: 3035830111497231017,
              rowIndex: 1423209342964650157,
              tableStartLocation: {
                index: 4012439676724472844,
                segmentId: "magnam",
              },
            },
          },
          tableStartLocation: {
            index: 7618360292500041981,
            segmentId: "et",
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            7787468353835954852,
            3945221723135841929,
            4742823144534339940,
          ],
          fields: "pariatur",
          tableColumnProperties: {
            width: {
              magnitude: 61.200001,
              unit: "PT",
            },
            widthType: "WIDTH_TYPE_UNSPECIFIED",
          },
          tableStartLocation: {
            index: 5523128127863971800,
            segmentId: "est",
          },
        },
        updateTableRowStyle: {
          fields: "harum",
          rowIndices: [
            1502963936379473833,
            134844738053259294,
            9030328761985061160,
          ],
          tableRowStyle: {
            minRowHeight: {
              magnitude: 84.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            preventOverflow: true,
            tableHeader: true,
          },
          tableStartLocation: {
            index: 889279753299200637,
            segmentId: "perferendis",
          },
        },
        updateTextStyle: {
          fields: "illum",
          range: {
            endIndex: 6629036385207991534,
            segmentId: "dicta",
            startIndex: 7979012997571479199,
          },
          textStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 64.099998,
                  green: 45.200001,
                  red: 18.100000,
                },
              },
            },
            baselineOffset: "SUPERSCRIPT",
            bold: false,
            fontSize: {
              magnitude: 42.200001,
              unit: "PT",
            },
            foregroundColor: {
              color: {
                rgbColor: {
                  blue: 90.199997,
                  green: 91.099998,
                  red: 84.199997,
                },
              },
            },
            italic: true,
            link: {
              bookmarkId: "assumenda",
              headingId: "iste",
              url: "laudantium",
            },
            smallCaps: true,
            strikethrough: true,
            underline: true,
            weightedFontFamily: {
              fontFamily: "molestias",
              weight: 7274761927021551690,
            },
          },
        },
      },
      {
        createFooter: {
          sectionBreakLocation: {
            index: 7178669309508925381,
            segmentId: "impedit",
          },
          type: "DEFAULT",
        },
        createFootnote: {
          endOfSegmentLocation: {
            segmentId: "dignissimos",
          },
          location: {
            index: 7018479074248259268,
            segmentId: "eius",
          },
        },
        createHeader: {
          sectionBreakLocation: {
            index: 8621633525973547473,
            segmentId: "architecto",
          },
          type: "DEFAULT",
        },
        createNamedRange: {
          name: "ipsa",
          range: {
            endIndex: 8580294551923686185,
            segmentId: "quam",
            startIndex: 2478420940284521905,
          },
        },
        createParagraphBullets: {
          bulletPreset: "BULLET_DISC_CIRCLE_SQUARE",
          range: {
            endIndex: 203536771159495225,
            segmentId: "hic",
            startIndex: 1067629835772252789,
          },
        },
        deleteContentRange: {
          range: {
            endIndex: 7621345094498405750,
            segmentId: "doloremque",
            startIndex: 1526382685998954242,
          },
        },
        deleteFooter: {
          footerId: "dicta",
        },
        deleteHeader: {
          headerId: "distinctio",
        },
        deleteNamedRange: {
          name: "voluptas",
          namedRangeId: "consequatur",
        },
        deleteParagraphBullets: {
          range: {
            endIndex: 779155058292860207,
            segmentId: "quis",
            startIndex: 7293997328744385729,
          },
        },
        deletePositionedObject: {
          objectId: "blanditiis",
        },
        deleteTableColumn: {
          tableCellLocation: {
            columnIndex: 6240154433186329948,
            rowIndex: 6522265241252266577,
            tableStartLocation: {
              index: 187607562694229957,
              segmentId: "ea",
            },
          },
        },
        deleteTableRow: {
          tableCellLocation: {
            columnIndex: 519134575483600036,
            rowIndex: 8220151845507174577,
            tableStartLocation: {
              index: 3521068655591366383,
              segmentId: "non",
            },
          },
        },
        insertInlineImage: {
          endOfSegmentLocation: {
            segmentId: "suscipit",
          },
          location: {
            index: 3872753664488019673,
            segmentId: "perferendis",
          },
          objectSize: {
            height: {
              magnitude: 43.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            width: {
              magnitude: 69.099998,
              unit: "UNIT_UNSPECIFIED",
            },
          },
          uri: "ea",
        },
        insertPageBreak: {
          endOfSegmentLocation: {
            segmentId: "dolor",
          },
          location: {
            index: 1104488391383121874,
            segmentId: "quos",
          },
        },
        insertSectionBreak: {
          endOfSegmentLocation: {
            segmentId: "et",
          },
          location: {
            index: 8951272542505405032,
            segmentId: "sint",
          },
          sectionType: "NEXT_PAGE",
        },
        insertTable: {
          columns: 7531458311308445458,
          endOfSegmentLocation: {
            segmentId: "aspernatur",
          },
          location: {
            index: 9172996914882314315,
            segmentId: "est",
          },
          rows: 932595969914355014,
        },
        insertTableColumn: {
          insertRight: false,
          tableCellLocation: {
            columnIndex: 127146344023191494,
            rowIndex: 5763449539912460701,
            tableStartLocation: {
              index: 7538057318331151067,
              segmentId: "cumque",
            },
          },
        },
        insertTableRow: {
          insertBelow: true,
          tableCellLocation: {
            columnIndex: 213629325496444736,
            rowIndex: 6461026551412750880,
            tableStartLocation: {
              index: 9191502731704075550,
              segmentId: "ea",
            },
          },
        },
        insertText: {
          endOfSegmentLocation: {
            segmentId: "aspernatur",
          },
          location: {
            index: 2754115983590563890,
            segmentId: "delectus",
          },
          text: "iusto",
        },
        mergeTableCells: {
          tableRange: {
            columnSpan: 1045160389383604330,
            rowSpan: 8528584490938715896,
            tableCellLocation: {
              columnIndex: 6150985785604264840,
              rowIndex: 201136682368623758,
              tableStartLocation: {
                index: 633266026673810668,
                segmentId: "nihil",
              },
            },
          },
        },
        pinTableHeaderRows: {
          pinnedHeaderRowsCount: 5018370869501883230,
          tableStartLocation: {
            index: 2133319266033746062,
            segmentId: "officiis",
          },
        },
        replaceAllText: {
          containsText: {
            matchCase: true,
            text: "id",
          },
          replaceText: "tenetur",
        },
        replaceImage: {
          imageObjectId: "temporibus",
          imageReplaceMethod: "CENTER_CROP",
          uri: "nulla",
        },
        replaceNamedRangeContent: {
          namedRangeId: "qui",
          namedRangeName: "exercitationem",
          text: "rem",
        },
        unmergeTableCells: {
          tableRange: {
            columnSpan: 5066569508154359996,
            rowSpan: 3631397369161988323,
            tableCellLocation: {
              columnIndex: 4253846045314559261,
              rowIndex: 5854935166641558569,
              tableStartLocation: {
                index: 2974511814070703559,
                segmentId: "deserunt",
              },
            },
          },
        },
        updateDocumentStyle: {
          documentStyle: {
            background: {
              color: {
                color: {
                  rgbColor: {
                    blue: 55.099998,
                    green: 72.099998,
                    red: 75.099998,
                  },
                },
              },
            },
            defaultFooterId: "fuga",
            defaultHeaderId: "recusandae",
            evenPageFooterId: "sed",
            evenPageHeaderId: "placeat",
            firstPageFooterId: "et",
            firstPageHeaderId: "fuga",
            marginBottom: {
              magnitude: 42.200001,
              unit: "PT",
            },
            marginFooter: {
              magnitude: 81.199997,
              unit: "PT",
            },
            marginHeader: {
              magnitude: 58.099998,
              unit: "PT",
            },
            marginLeft: {
              magnitude: 27.100000,
              unit: "UNIT_UNSPECIFIED",
            },
            marginRight: {
              magnitude: 69.099998,
              unit: "PT",
            },
            marginTop: {
              magnitude: 17.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            pageNumberStart: 4708476304598192687,
            pageSize: {
              height: {
                magnitude: 3.100000,
                unit: "PT",
              },
              width: {
                magnitude: 17.200001,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            useCustomHeaderFooterMargins: true,
            useEvenPageHeaderFooter: false,
            useFirstPageHeaderFooter: true,
          },
          fields: "illo",
        },
        updateParagraphStyle: {
          fields: "ut",
          paragraphStyle: {
            alignment: "ALIGNMENT_UNSPECIFIED",
            avoidWidowAndOrphan: false,
            borderBetween: {
              color: {
                color: {
                  rgbColor: {
                    blue: 73.099998,
                    green: 50.099998,
                    red: 37.099998,
                  },
                },
              },
              dashStyle: "SOLID",
              padding: {
                magnitude: 65.099998,
                unit: "UNIT_UNSPECIFIED",
              },
              width: {
                magnitude: 75.199997,
                unit: "PT",
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 69.199997,
                    green: 14.100000,
                    red: 61.200001,
                  },
                },
              },
              dashStyle: "DASH",
              padding: {
                magnitude: 49.099998,
                unit: "UNIT_UNSPECIFIED",
              },
              width: {
                magnitude: 40.099998,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 93.099998,
                    green: 58.200001,
                    red: 51.099998,
                  },
                },
              },
              dashStyle: "DASH",
              padding: {
                magnitude: 26.200001,
                unit: "PT",
              },
              width: {
                magnitude: 2.100000,
                unit: "PT",
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 75.099998,
                    green: 81.199997,
                    red: 67.099998,
                  },
                },
              },
              dashStyle: "SOLID",
              padding: {
                magnitude: 35.099998,
                unit: "UNIT_UNSPECIFIED",
              },
              width: {
                magnitude: 49.099998,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 85.099998,
                    green: 31.200001,
                    red: 28.200001,
                  },
                },
              },
              dashStyle: "DASH_STYLE_UNSPECIFIED",
              padding: {
                magnitude: 62.099998,
                unit: "UNIT_UNSPECIFIED",
              },
              width: {
                magnitude: 19.100000,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            direction: "LEFT_TO_RIGHT",
            headingId: "aut",
            indentEnd: {
              magnitude: 47.200001,
              unit: "UNIT_UNSPECIFIED",
            },
            indentFirstLine: {
              magnitude: 44.099998,
              unit: "PT",
            },
            indentStart: {
              magnitude: 72.199997,
              unit: "PT",
            },
            keepLinesTogether: true,
            keepWithNext: true,
            lineSpacing: 9.100000,
            namedStyleType: "HEADING_3",
            pageBreakBefore: false,
            shading: {
              backgroundColor: {
                color: {
                  rgbColor: {
                    blue: 20.200001,
                    green: 30.100000,
                    red: 86.099998,
                  },
                },
              },
            },
            spaceAbove: {
              magnitude: 61.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            spaceBelow: {
              magnitude: 45.099998,
              unit: "PT",
            },
            spacingMode: "SPACING_MODE_UNSPECIFIED",
            tabStops: [
              {
                alignment: "CENTER",
                offset: {
                  magnitude: 93.199997,
                  unit: "PT",
                },
              },
              {
                alignment: "END",
                offset: {
                  magnitude: 33.200001,
                  unit: "UNIT_UNSPECIFIED",
                },
              },
            ],
          },
          range: {
            endIndex: 6066651900514610334,
            segmentId: "quos",
            startIndex: 5538397250943388895,
          },
        },
        updateSectionStyle: {
          fields: "ex",
          range: {
            endIndex: 4345622572618472669,
            segmentId: "quia",
            startIndex: 7369310067358759469,
          },
          sectionStyle: {
            columnProperties: [
              {
                paddingEnd: {
                  magnitude: 26.100000,
                  unit: "PT",
                },
                width: {
                  magnitude: 20.200001,
                  unit: "PT",
                },
              },
            ],
            columnSeparatorStyle: "BETWEEN_EACH_COLUMN",
            contentDirection: "RIGHT_TO_LEFT",
            defaultFooterId: "neque",
            defaultHeaderId: "rerum",
            evenPageFooterId: "reiciendis",
            evenPageHeaderId: "quos",
            firstPageFooterId: "minima",
            firstPageHeaderId: "praesentium",
            marginBottom: {
              magnitude: 84.199997,
              unit: "PT",
            },
            marginFooter: {
              magnitude: 20.100000,
              unit: "UNIT_UNSPECIFIED",
            },
            marginHeader: {
              magnitude: 34.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            marginLeft: {
              magnitude: 69.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            marginRight: {
              magnitude: 31.100000,
              unit: "PT",
            },
            marginTop: {
              magnitude: 47.200001,
              unit: "PT",
            },
            pageNumberStart: 5126858849142592423,
            sectionType: "CONTINUOUS",
            useFirstPageHeaderFooter: true,
          },
        },
        updateTableCellStyle: {
          fields: "et",
          tableCellStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 28.100000,
                  green: 60.099998,
                  red: 33.200001,
                },
              },
            },
            borderBottom: {
              color: {
                color: {
                  rgbColor: {
                    blue: 94.199997,
                    green: 60.099998,
                    red: 91.199997,
                  },
                },
              },
              dashStyle: "DOT",
              width: {
                magnitude: 47.200001,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            borderLeft: {
              color: {
                color: {
                  rgbColor: {
                    blue: 54.099998,
                    green: 4.200000,
                    red: 65.199997,
                  },
                },
              },
              dashStyle: "DASH_STYLE_UNSPECIFIED",
              width: {
                magnitude: 20.100000,
                unit: "PT",
              },
            },
            borderRight: {
              color: {
                color: {
                  rgbColor: {
                    blue: 3.200000,
                    green: 70.099998,
                    red: 63.200001,
                  },
                },
              },
              dashStyle: "DASH_STYLE_UNSPECIFIED",
              width: {
                magnitude: 3.100000,
                unit: "UNIT_UNSPECIFIED",
              },
            },
            borderTop: {
              color: {
                color: {
                  rgbColor: {
                    blue: 45.099998,
                    green: 19.100000,
                    red: 33.099998,
                  },
                },
              },
              dashStyle: "DASH",
              width: {
                magnitude: 54.200001,
                unit: "PT",
              },
            },
            columnSpan: 219499341641324294,
            contentAlignment: "MIDDLE",
            paddingBottom: {
              magnitude: 65.099998,
              unit: "UNIT_UNSPECIFIED",
            },
            paddingLeft: {
              magnitude: 91.199997,
              unit: "PT",
            },
            paddingRight: {
              magnitude: 84.199997,
              unit: "PT",
            },
            paddingTop: {
              magnitude: 13.200000,
              unit: "UNIT_UNSPECIFIED",
            },
            rowSpan: 6189909207947001558,
          },
          tableRange: {
            columnSpan: 1718360398048267082,
            rowSpan: 9182776419247387771,
            tableCellLocation: {
              columnIndex: 8037686656878640300,
              rowIndex: 2934755774424534288,
              tableStartLocation: {
                index: 8326600461687117106,
                segmentId: "ipsam",
              },
            },
          },
          tableStartLocation: {
            index: 4359082301878081056,
            segmentId: "et",
          },
        },
        updateTableColumnProperties: {
          columnIndices: [
            1852088458822905920,
            7586438891944009421,
          ],
          fields: "soluta",
          tableColumnProperties: {
            width: {
              magnitude: 0.200000,
              unit: "UNIT_UNSPECIFIED",
            },
            widthType: "EVENLY_DISTRIBUTED",
          },
          tableStartLocation: {
            index: 427966507688336275,
            segmentId: "dignissimos",
          },
        },
        updateTableRowStyle: {
          fields: "doloribus",
          rowIndices: [
            962394742933999841,
            5084251026971243878,
          ],
          tableRowStyle: {
            minRowHeight: {
              magnitude: 36.099998,
              unit: "PT",
            },
            preventOverflow: false,
            tableHeader: false,
          },
          tableStartLocation: {
            index: 6879210025953136831,
            segmentId: "sint",
          },
        },
        updateTextStyle: {
          fields: "voluptatum",
          range: {
            endIndex: 6237824671297816864,
            segmentId: "enim",
            startIndex: 2572294861847626480,
          },
          textStyle: {
            backgroundColor: {
              color: {
                rgbColor: {
                  blue: 76.099998,
                  green: 0.100000,
                  red: 66.099998,
                },
              },
            },
            baselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
            bold: false,
            fontSize: {
              magnitude: 84.199997,
              unit: "PT",
            },
            foregroundColor: {
              color: {
                rgbColor: {
                  blue: 91.099998,
                  green: 82.199997,
                  red: 61.099998,
                },
              },
            },
            italic: false,
            link: {
              bookmarkId: "quia",
              headingId: "corrupti",
              url: "sunt",
            },
            smallCaps: false,
            strikethrough: false,
            underline: true,
            weightedFontFamily: {
              fontFamily: "quos",
              weight: 1570222526780299863,
            },
          },
        },
      },
    ],
    writeControl: {
      requiredRevisionId: "explicabo",
      targetRevisionId: "est",
    },
  },
};

sdk.documents.docsDocumentsBatchUpdate(req).then((res: DocsDocumentsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### documents

* `docsDocumentsBatchUpdate` - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `docsDocumentsCreate` - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* `docsDocumentsGet` - Gets the latest version of the specified document.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
