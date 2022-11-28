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
import { SheetsSpreadsheetsBatchUpdateRequest, SheetsSpreadsheetsBatchUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: SheetsSpreadsheetsBatchUpdateRequest = {
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
    spreadsheetId: "ut",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "maiores",
    alt: "json",
    callback: "inventore",
    fields: "ex",
    key: "quia",
    oauthToken: "voluptatem",
    prettyPrint: false,
    quotaUser: "temporibus",
    uploadType: "eaque",
    uploadProtocol: "architecto",
  },
  request: {
    includeSpreadsheetInResponse: true,
    requests: [
      {
        addBanding: {
          bandedRange: {
            bandedRangeId: 3537775318324188141,
            columnProperties: {
              firstBandColor: {
                alpha: 58.200001,
                blue: 89.099998,
                green: 78.099998,
                red: 44.200001,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 56.200001,
                  blue: 7.100000,
                  green: 18.100000,
                  red: 27.100000,
                },
                themeColor: "TEXT",
              },
              footerColor: {
                alpha: 48.099998,
                blue: 78.199997,
                green: 50.200001,
                red: 47.099998,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 12.200000,
                  blue: 1.200000,
                  green: 78.099998,
                  red: 70.099998,
                },
                themeColor: "ACCENT5",
              },
              headerColor: {
                alpha: 62.099998,
                blue: 11.100000,
                green: 78.199997,
                red: 49.099998,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 54.200001,
                  blue: 58.200001,
                  green: 9.100000,
                  red: 85.199997,
                },
                themeColor: "ACCENT4",
              },
              secondBandColor: {
                alpha: 68.199997,
                blue: 6.100000,
                green: 33.099998,
                red: 7.100000,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 20.200001,
                  blue: 70.199997,
                  green: 34.200001,
                  red: 41.200001,
                },
                themeColor: "ACCENT5",
              },
            },
            range: {
              endColumnIndex: 2130175759764282836,
              endRowIndex: 6226752851074650,
              sheetId: 3557503879342857860,
              startColumnIndex: 3907129095791418793,
              startRowIndex: 6620118803573252155,
            },
            rowProperties: {
              firstBandColor: {
                alpha: 28.200001,
                blue: 92.099998,
                green: 12.100000,
                red: 19.100000,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 77.099998,
                  blue: 70.099998,
                  green: 0.200000,
                  red: 51.099998,
                },
                themeColor: "ACCENT6",
              },
              footerColor: {
                alpha: 38.099998,
                blue: 81.099998,
                green: 41.200001,
                red: 23.100000,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 55.200001,
                  blue: 53.099998,
                  green: 28.100000,
                  red: 64.099998,
                },
                themeColor: "ACCENT6",
              },
              headerColor: {
                alpha: 66.099998,
                blue: 21.200001,
                green: 81.199997,
                red: 9.100000,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 41.099998,
                  blue: 94.199997,
                  green: 22.200001,
                  red: 81.099998,
                },
                themeColor: "TEXT",
              },
              secondBandColor: {
                alpha: 56.200001,
                blue: 68.199997,
                green: 49.099998,
                red: 37.099998,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 48.099998,
                  blue: 69.199997,
                  green: 39.099998,
                  red: 97.199997,
                },
                themeColor: "ACCENT5",
              },
            },
          },
        },
        addChart: {
          chart: {
            border: {
              color: {
                alpha: 48.099998,
                blue: 57.099998,
                green: 72.099998,
                red: 67.199997,
              },
              colorStyle: {
                rgbColor: {
                  alpha: 45.099998,
                  blue: 74.099998,
                  green: 50.099998,
                  red: 52.200001,
                },
                themeColor: "ACCENT1",
              },
            },
            chartId: 6053848018061071203,
            position: {
              newSheet: false,
              overlayPosition: {
                anchorCell: {
                  columnIndex: 9039652709476821736,
                  rowIndex: 1950266466004415225,
                  sheetId: 4816523786484819806,
                },
                heightPixels: 7781519587397494454,
                offsetXPixels: 2391623554762695602,
                offsetYPixels: 3023146302834488181,
                widthPixels: 4579249829480881461,
              },
              sheetId: 2913202937030737375,
            },
            spec: {
              altText: "aut",
              backgroundColor: {
                alpha: 92.099998,
                blue: 91.199997,
                green: 36.099998,
                red: 82.199997,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 97.099998,
                  blue: 10.100000,
                  green: 65.199997,
                  red: 40.200001,
                },
                themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
              },
              basicChart: {
                axis: [
                  {
                    format: {
                      bold: false,
                      fontFamily: "ullam",
                      fontSize: 3600451041671605837,
                      foregroundColor: {
                        alpha: 24.200001,
                        blue: 65.199997,
                        green: 80.099998,
                        red: 29.200001,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 85.099998,
                          blue: 40.099998,
                          green: 71.199997,
                          red: 11.200000,
                        },
                        themeColor: "ACCENT1",
                      },
                      italic: true,
                      link: {
                        uri: "quia",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    position: "BOTTOM_AXIS",
                    title: "suscipit",
                    titleTextPosition: {
                      horizontalAlignment: "LEFT",
                    },
                    viewWindowOptions: {
                      viewWindowMax: 36.200001,
                      viewWindowMin: 15.100000,
                      viewWindowMode: "PRETTY",
                    },
                  },
                  {
                    format: {
                      bold: false,
                      fontFamily: "voluptatem",
                      fontSize: 6705010206753646991,
                      foregroundColor: {
                        alpha: 69.199997,
                        blue: 54.200001,
                        green: 97.199997,
                        red: 47.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 81.199997,
                          blue: 39.200001,
                          green: 9.200000,
                          red: 81.199997,
                        },
                        themeColor: "ACCENT3",
                      },
                      italic: false,
                      link: {
                        uri: "sed",
                      },
                      strikethrough: false,
                      underline: false,
                    },
                    position: "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
                    title: "aspernatur",
                    titleTextPosition: {
                      horizontalAlignment: "LEFT",
                    },
                    viewWindowOptions: {
                      viewWindowMax: 76.099998,
                      viewWindowMin: 49.200001,
                      viewWindowMode: "DEFAULT_VIEW_WINDOW_MODE",
                    },
                  },
                ],
                chartType: "SCATTER",
                compareMode: "CATEGORY",
                domains: [
                  {
                    domain: {
                      aggregateType: "MIN",
                      columnReference: {
                        name: "magnam",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_OF_YEAR",
                        },
                        histogramRule: {
                          intervalSize: 76.099998,
                          maxValue: 25.100000,
                          minValue: 95.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 73227765422088775,
                            endRowIndex: 8611253073496581189,
                            sheetId: 229241899235371050,
                            startColumnIndex: 2470060835191332904,
                            startRowIndex: 1587037050072966053,
                          },
                        ],
                      },
                    },
                    reversed: true,
                  },
                  {
                    domain: {
                      aggregateType: "MIN",
                      columnReference: {
                        name: "rem",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "QUARTER",
                        },
                        histogramRule: {
                          intervalSize: 73.199997,
                          maxValue: 68.099998,
                          minValue: 64.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 5339161580099378903,
                            endRowIndex: 4420256686149370736,
                            sheetId: 1118064679398502769,
                            startColumnIndex: 6258357623320049421,
                            startRowIndex: 5863058203112263469,
                          },
                          {
                            endColumnIndex: 4436590532278987198,
                            endRowIndex: 1492113315072183892,
                            sheetId: 7589731031190014564,
                            startColumnIndex: 8805221467871702450,
                            startRowIndex: 3175271365061828729,
                          },
                        ],
                      },
                    },
                    reversed: false,
                  },
                ],
                headerCount: 2760392807523762018,
                interpolateNulls: true,
                legendPosition: "BOTTOM_LEGEND",
                lineSmoothing: false,
                series: [
                  {
                    color: {
                      alpha: 15.100000,
                      blue: 4.200000,
                      green: 79.099998,
                      red: 89.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 76.199997,
                        blue: 23.100000,
                        green: 23.200001,
                        red: 95.199997,
                      },
                      themeColor: "ACCENT4",
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "AVERAGE",
                        columnReference: {
                          name: "quia",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            intervalSize: 73.099998,
                            maxValue: 55.200001,
                            minValue: 88.199997,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 2673603199914215347,
                              endRowIndex: 2178723809918437196,
                              sheetId: 7994365101346039003,
                              startColumnIndex: 2020233047788050432,
                              startRowIndex: 8222146927718616674,
                            },
                          ],
                        },
                      },
                      placement: "LEFT",
                      textFormat: {
                        bold: false,
                        fontFamily: "aut",
                        fontSize: 8830968024171757915,
                        foregroundColor: {
                          alpha: 77.199997,
                          blue: 61.200001,
                          green: 53.200001,
                          red: 11.200000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 93.099998,
                            blue: 43.200001,
                            green: 98.199997,
                            red: 57.099998,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        italic: true,
                        link: {
                          uri: "quas",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      type: "NONE",
                    },
                    lineStyle: {
                      type: "LINE_DASH_TYPE_UNSPECIFIED",
                      width: 6122386105436166585,
                    },
                    pointStyle: {
                      shape: "CIRCLE",
                      size: 50.099998,
                    },
                    series: {
                      aggregateType: "MEDIAN",
                      columnReference: {
                        name: "eaque",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "SECOND",
                        },
                        histogramRule: {
                          intervalSize: 85.099998,
                          maxValue: 88.199997,
                          minValue: 85.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 3320049045761479627,
                            endRowIndex: 1798229738908754631,
                            sheetId: 1771533442844968475,
                            startColumnIndex: 4808439643167290400,
                            startRowIndex: 5247655545916092947,
                          },
                          {
                            endColumnIndex: 2797899158224012148,
                            endRowIndex: 2907287341322700655,
                            sheetId: 5955604656950344340,
                            startColumnIndex: 7742366825748643364,
                            startRowIndex: 3788184920123496275,
                          },
                        ],
                      },
                    },
                    styleOverrides: [
                      {
                        color: {
                          alpha: 4.200000,
                          blue: 47.099998,
                          green: 96.099998,
                          red: 43.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 91.199997,
                            blue: 80.099998,
                            green: 81.099998,
                            red: 1.100000,
                          },
                          themeColor: "ACCENT4",
                        },
                        index: 31202437711713112,
                        pointStyle: {
                          shape: "STAR",
                          size: 81.099998,
                        },
                      },
                      {
                        color: {
                          alpha: 80.199997,
                          blue: 20.200001,
                          green: 55.200001,
                          red: 37.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 20.100000,
                            blue: 37.200001,
                            green: 83.199997,
                            red: 8.100000,
                          },
                          themeColor: "BACKGROUND",
                        },
                        index: 8679448609866469293,
                        pointStyle: {
                          shape: "STAR",
                          size: 92.199997,
                        },
                      },
                    ],
                    targetAxis: "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
                    type: "BASIC_CHART_TYPE_UNSPECIFIED",
                  },
                  {
                    color: {
                      alpha: 44.200001,
                      blue: 94.099998,
                      green: 59.099998,
                      red: 51.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 3.200000,
                        blue: 11.200000,
                        green: 77.099998,
                        red: 44.200001,
                      },
                      themeColor: "ACCENT6",
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "MIN",
                        columnReference: {
                          name: "rerum",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            intervalSize: 18.100000,
                            maxValue: 69.099998,
                            minValue: 31.200001,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 8431882516496258550,
                              endRowIndex: 2497261654647450180,
                              sheetId: 6207275287107492372,
                              startColumnIndex: 2737549467260072435,
                              startRowIndex: 4351397118869045849,
                            },
                            {
                              endColumnIndex: 917587242561329594,
                              endRowIndex: 4938658918275451921,
                              sheetId: 3906714134400133532,
                              startColumnIndex: 4258813429288717413,
                              startRowIndex: 6597140575312954166,
                            },
                            {
                              endColumnIndex: 6162139989807413820,
                              endRowIndex: 425012495175648345,
                              sheetId: 7898995906621315565,
                              startColumnIndex: 638990696473680347,
                              startRowIndex: 2852299527975020369,
                            },
                          ],
                        },
                      },
                      placement: "RIGHT",
                      textFormat: {
                        bold: true,
                        fontFamily: "aperiam",
                        fontSize: 7656660859231222117,
                        foregroundColor: {
                          alpha: 52.200001,
                          blue: 47.200001,
                          green: 3.100000,
                          red: 80.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 26.100000,
                            blue: 47.200001,
                            green: 70.199997,
                            red: 2.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        italic: true,
                        link: {
                          uri: "voluptas",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      type: "DATA",
                    },
                    lineStyle: {
                      type: "INVISIBLE",
                      width: 7562047661485223905,
                    },
                    pointStyle: {
                      shape: "DIAMOND",
                      size: 30.100000,
                    },
                    series: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "laboriosam",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR_MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 29.200001,
                          maxValue: 83.199997,
                          minValue: 60.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 6020995956733479233,
                            endRowIndex: 5094722332696236769,
                            sheetId: 4086278937603032396,
                            startColumnIndex: 8746520532641300758,
                            startRowIndex: 4708177383837507525,
                          },
                          {
                            endColumnIndex: 7581122173382942831,
                            endRowIndex: 7437208793706490681,
                            sheetId: 8659560938441046080,
                            startColumnIndex: 1918023058040209840,
                            startRowIndex: 8723213891852446059,
                          },
                          {
                            endColumnIndex: 3077532067231960554,
                            endRowIndex: 7099050462618859780,
                            sheetId: 4080097336909990219,
                            startColumnIndex: 5946238631435621555,
                            startRowIndex: 1483231155125180000,
                          },
                        ],
                      },
                    },
                    styleOverrides: [
                      {
                        color: {
                          alpha: 70.099998,
                          blue: 25.100000,
                          green: 64.199997,
                          red: 73.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 93.199997,
                            blue: 8.200000,
                            green: 12.200000,
                            red: 62.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        index: 3864000914754969481,
                        pointStyle: {
                          shape: "PENTAGON",
                          size: 29.100000,
                        },
                      },
                    ],
                    targetAxis: "RIGHT_AXIS",
                    type: "LINE",
                  },
                  {
                    color: {
                      alpha: 3.100000,
                      blue: 21.100000,
                      green: 52.099998,
                      red: 44.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 54.099998,
                        blue: 69.199997,
                        green: 45.200001,
                        red: 96.099998,
                      },
                      themeColor: "ACCENT4",
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "MAX",
                        columnReference: {
                          name: "blanditiis",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_WEEK",
                          },
                          histogramRule: {
                            intervalSize: 27.200001,
                            maxValue: 98.099998,
                            minValue: 81.199997,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 5191530260603294830,
                              endRowIndex: 1614021099091718904,
                              sheetId: 4333256656581762269,
                              startColumnIndex: 226691347430573793,
                              startRowIndex: 1098526348391847177,
                            },
                          ],
                        },
                      },
                      placement: "DATA_LABEL_PLACEMENT_UNSPECIFIED",
                      textFormat: {
                        bold: true,
                        fontFamily: "et",
                        fontSize: 7180646102462692487,
                        foregroundColor: {
                          alpha: 12.200000,
                          blue: 85.099998,
                          green: 86.199997,
                          red: 14.100000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 72.099998,
                            blue: 99.099998,
                            green: 96.199997,
                            red: 90.099998,
                          },
                          themeColor: "ACCENT2",
                        },
                        italic: true,
                        link: {
                          uri: "enim",
                        },
                        strikethrough: false,
                        underline: false,
                      },
                      type: "CUSTOM",
                    },
                    lineStyle: {
                      type: "MEDIUM_DASHED_DOTTED",
                      width: 1582157148629915679,
                    },
                    pointStyle: {
                      shape: "CIRCLE",
                      size: 20.200001,
                    },
                    series: {
                      aggregateType: "SUM",
                      columnReference: {
                        name: "ullam",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 28.200001,
                          maxValue: 2.200000,
                          minValue: 51.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 6641157933201720175,
                            endRowIndex: 348962265767219234,
                            sheetId: 6087487523027636174,
                            startColumnIndex: 7020837277434348360,
                            startRowIndex: 2350053621388788456,
                          },
                        ],
                      },
                    },
                    styleOverrides: [
                      {
                        color: {
                          alpha: 87.099998,
                          blue: 91.199997,
                          green: 90.199997,
                          red: 78.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 71.199997,
                            blue: 58.200001,
                            green: 78.199997,
                            red: 87.199997,
                          },
                          themeColor: "ACCENT1",
                        },
                        index: 3327940283752789758,
                        pointStyle: {
                          shape: "STAR",
                          size: 68.199997,
                        },
                      },
                    ],
                    targetAxis: "LEFT_AXIS",
                    type: "STEPPED_AREA",
                  },
                ],
                stackedType: "PERCENT_STACKED",
                threeDimensional: false,
                totalDataLabel: {
                  customLabelData: {
                    aggregateType: "SUM",
                    columnReference: {
                      name: "sed",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_OF_YEAR",
                      },
                      histogramRule: {
                        intervalSize: 13.200000,
                        maxValue: 33.200001,
                        minValue: 35.200001,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 5181253555374754790,
                          endRowIndex: 7288353480995882799,
                          sheetId: 3904702029721882492,
                          startColumnIndex: 2996449213147531852,
                          startRowIndex: 6615366017011705054,
                        },
                        {
                          endColumnIndex: 301371576380191272,
                          endRowIndex: 2613688450671952284,
                          sheetId: 5428986059538844805,
                          startColumnIndex: 5495781278475721327,
                          startRowIndex: 3219589775972238133,
                        },
                        {
                          endColumnIndex: 7291520958366812395,
                          endRowIndex: 7420270134608979753,
                          sheetId: 4494887811482262470,
                          startColumnIndex: 5018757871758749950,
                          startRowIndex: 6753235412891727890,
                        },
                      ],
                    },
                  },
                  placement: "INSIDE_BASE",
                  textFormat: {
                    bold: true,
                    fontFamily: "rerum",
                    fontSize: 6468151331758011452,
                    foregroundColor: {
                      alpha: 57.099998,
                      blue: 5.200000,
                      green: 29.200001,
                      red: 9.100000,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 12.100000,
                        blue: 49.099998,
                        green: 99.199997,
                        red: 33.200001,
                      },
                      themeColor: "ACCENT1",
                    },
                    italic: false,
                    link: {
                      uri: "iure",
                    },
                    strikethrough: false,
                    underline: false,
                  },
                  type: "DATA",
                },
              },
              bubbleChart: {
                bubbleBorderColor: {
                  alpha: 1.100000,
                  blue: 27.200001,
                  green: 10.100000,
                  red: 64.199997,
                },
                bubbleBorderColorStyle: {
                  rgbColor: {
                    alpha: 57.099998,
                    blue: 60.200001,
                    green: 9.100000,
                    red: 54.099998,
                  },
                  themeColor: "ACCENT1",
                },
                bubbleLabels: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "labore",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE",
                    },
                    histogramRule: {
                      intervalSize: 49.099998,
                      maxValue: 12.100000,
                      minValue: 95.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 7464393631893065240,
                        endRowIndex: 2201989465877679528,
                        sheetId: 5045101056817613966,
                        startColumnIndex: 4987594867525933762,
                        startRowIndex: 5573264725935388619,
                      },
                      {
                        endColumnIndex: 6188383901834812054,
                        endRowIndex: 5212201258058932300,
                        sheetId: 7001940796844078120,
                        startColumnIndex: 1449029718930874043,
                        startRowIndex: 4768896546666872591,
                      },
                    ],
                  },
                },
                bubbleMaxRadiusSize: 9093930505902569705,
                bubbleMinRadiusSize: 4781783069900118131,
                bubbleOpacity: 43.099998,
                bubbleSizes: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "officiis",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "MONTH",
                    },
                    histogramRule: {
                      intervalSize: 97.199997,
                      maxValue: 1.100000,
                      minValue: 10.200000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 2854694065564148446,
                        endRowIndex: 1646887693707965900,
                        sheetId: 622957476297572160,
                        startColumnIndex: 3348885792609436862,
                        startRowIndex: 1232150064396442946,
                      },
                    ],
                  },
                },
                bubbleTextStyle: {
                  bold: false,
                  fontFamily: "facilis",
                  fontSize: 5128062850880294198,
                  foregroundColor: {
                    alpha: 86.099998,
                    blue: 19.100000,
                    green: 8.100000,
                    red: 71.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 26.200001,
                      blue: 34.099998,
                      green: 24.200001,
                      red: 66.199997,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  italic: false,
                  link: {
                    uri: "blanditiis",
                  },
                  strikethrough: false,
                  underline: true,
                },
                domain: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "quisquam",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE",
                    },
                    histogramRule: {
                      intervalSize: 68.199997,
                      maxValue: 72.199997,
                      minValue: 8.100000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 5094574945039858300,
                        endRowIndex: 9067347134846571423,
                        sheetId: 4276738076478463591,
                        startColumnIndex: 5202920958954433861,
                        startRowIndex: 7931522360270387813,
                      },
                      {
                        endColumnIndex: 7278222392810880634,
                        endRowIndex: 4550243815244599217,
                        sheetId: 5922762745580301509,
                        startColumnIndex: 4148295158651724695,
                        startRowIndex: 2472072398495821602,
                      },
                    ],
                  },
                },
                groupIds: {
                  aggregateType: "AVERAGE",
                  columnReference: {
                    name: "voluptates",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "QUARTER",
                    },
                    histogramRule: {
                      intervalSize: 5.200000,
                      maxValue: 16.200001,
                      minValue: 97.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 26868102226605720,
                        endRowIndex: 3607120368858645419,
                        sheetId: 7131840324377953300,
                        startColumnIndex: 3147738041831092201,
                        startRowIndex: 228881514759180651,
                      },
                      {
                        endColumnIndex: 6184834176308342599,
                        endRowIndex: 3816406318859665730,
                        sheetId: 4111024982225526841,
                        startColumnIndex: 6992971737491000241,
                        startRowIndex: 1942271511117485404,
                      },
                    ],
                  },
                },
                legendPosition: "LEFT_LEGEND",
                series: {
                  aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                  columnReference: {
                    name: "dolores",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE",
                    },
                    histogramRule: {
                      intervalSize: 47.099998,
                      maxValue: 56.099998,
                      minValue: 39.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 2681953058247998593,
                        endRowIndex: 5118222735180565000,
                        sheetId: 2577140916423278691,
                        startColumnIndex: 2605840906177688133,
                        startRowIndex: 3087077197534083624,
                      },
                      {
                        endColumnIndex: 12463066382717379,
                        endRowIndex: 7070164578540387082,
                        sheetId: 8767466066173950933,
                        startColumnIndex: 8011293733394019082,
                        startRowIndex: 6004749571675224974,
                      },
                      {
                        endColumnIndex: 3005416190388972974,
                        endRowIndex: 2610383695050141241,
                        sheetId: 8213844429885979255,
                        startColumnIndex: 7472427232843202852,
                        startRowIndex: 4462669887637960231,
                      },
                    ],
                  },
                },
              },
              candlestickChart: {
                data: [
                  {
                    closeSeries: {
                      data: {
                        aggregateType: "AVERAGE",
                        columnReference: {
                          name: "sed",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR_MINUTE",
                          },
                          histogramRule: {
                            intervalSize: 18.100000,
                            maxValue: 30.100000,
                            minValue: 61.200001,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 6484101396744012118,
                              endRowIndex: 5972927134052466296,
                              sheetId: 7202379684583676815,
                              startColumnIndex: 6023567260086754409,
                              startRowIndex: 9198434023898055190,
                            },
                            {
                              endColumnIndex: 6710079203305329938,
                              endRowIndex: 2521817452212228247,
                              sheetId: 4569502223474982846,
                              startColumnIndex: 4488345603760062207,
                              startRowIndex: 1618699049179835753,
                            },
                            {
                              endColumnIndex: 3363792760472510941,
                              endRowIndex: 1025600486540301281,
                              sheetId: 1295766319577518352,
                              startColumnIndex: 8744319948580368319,
                              startRowIndex: 7011806961600752926,
                            },
                          ],
                        },
                      },
                    },
                    highSeries: {
                      data: {
                        aggregateType: "MEDIAN",
                        columnReference: {
                          name: "blanditiis",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH_DAY",
                          },
                          histogramRule: {
                            intervalSize: 21.100000,
                            maxValue: 53.200001,
                            minValue: 94.099998,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 7121374177204873288,
                              endRowIndex: 1404940093894261252,
                              sheetId: 3651686304084617923,
                              startColumnIndex: 1150077954328873984,
                              startRowIndex: 942013809832989914,
                            },
                          ],
                        },
                      },
                    },
                    lowSeries: {
                      data: {
                        aggregateType: "MEDIAN",
                        columnReference: {
                          name: "deleniti",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH_DAY",
                          },
                          histogramRule: {
                            intervalSize: 89.199997,
                            maxValue: 12.200000,
                            minValue: 96.099998,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 1746685345059506294,
                              endRowIndex: 4396092314044232391,
                              sheetId: 2222631476963895905,
                              startColumnIndex: 832661747751643561,
                              startRowIndex: 1076573409618637981,
                            },
                            {
                              endColumnIndex: 4273956165796730420,
                              endRowIndex: 5592119123626581874,
                              sheetId: 5125447949554226464,
                              startColumnIndex: 347793150328472798,
                              startRowIndex: 3991433124524518300,
                            },
                          ],
                        },
                      },
                    },
                    openSeries: {
                      data: {
                        aggregateType: "MIN",
                        columnReference: {
                          name: "consequatur",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_MONTH",
                          },
                          histogramRule: {
                            intervalSize: 24.200001,
                            maxValue: 29.200001,
                            minValue: 53.200001,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 626373425638145486,
                              endRowIndex: 575914510298744060,
                              sheetId: 3109017952143028708,
                              startColumnIndex: 3032133988481846979,
                              startRowIndex: 7915869516351235034,
                            },
                            {
                              endColumnIndex: 6983141330588058551,
                              endRowIndex: 1328807742989411223,
                              sheetId: 904632724283809209,
                              startColumnIndex: 717562221767320220,
                              startRowIndex: 3939782152533714438,
                            },
                            {
                              endColumnIndex: 7622087424272599534,
                              endRowIndex: 8366998850263264976,
                              sheetId: 8940809751513390202,
                              startColumnIndex: 1140995189378879272,
                              startRowIndex: 6864386485282276722,
                            },
                          ],
                        },
                      },
                    },
                  },
                  {
                    closeSeries: {
                      data: {
                        aggregateType: "MAX",
                        columnReference: {
                          name: "ad",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "MONTH",
                          },
                          histogramRule: {
                            intervalSize: 18.100000,
                            maxValue: 7.200000,
                            minValue: 4.100000,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 120299559794417134,
                              endRowIndex: 2028138314506640335,
                              sheetId: 5554067597297321627,
                              startColumnIndex: 1857773197753747915,
                              startRowIndex: 3900846893311376933,
                            },
                            {
                              endColumnIndex: 592553329192465694,
                              endRowIndex: 7576779908845587504,
                              sheetId: 1640167802606778095,
                              startColumnIndex: 9081166907872613926,
                              startRowIndex: 2931272113639142143,
                            },
                            {
                              endColumnIndex: 2432997937801223720,
                              endRowIndex: 1370154377712411809,
                              sheetId: 6514175284929087520,
                              startColumnIndex: 7108964262027612163,
                              startRowIndex: 8555999553722824720,
                            },
                          ],
                        },
                      },
                    },
                    highSeries: {
                      data: {
                        aggregateType: "MEDIAN",
                        columnReference: {
                          name: "pariatur",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_MONTH",
                          },
                          histogramRule: {
                            intervalSize: 64.099998,
                            maxValue: 31.200001,
                            minValue: 27.100000,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 8393821415578421887,
                              endRowIndex: 7657219060845316184,
                              sheetId: 7728286929211733214,
                              startColumnIndex: 2683330668168202104,
                              startRowIndex: 3905209760849006253,
                            },
                            {
                              endColumnIndex: 2436459907403620308,
                              endRowIndex: 131140674844077240,
                              sheetId: 2839493979588891219,
                              startColumnIndex: 6239254252417080044,
                              startRowIndex: 8846537539721881978,
                            },
                            {
                              endColumnIndex: 5114184988202390791,
                              endRowIndex: 4838782832636815031,
                              sheetId: 1758598133446615943,
                              startColumnIndex: 309034086958870596,
                              startRowIndex: 4804385811428931933,
                            },
                          ],
                        },
                      },
                    },
                    lowSeries: {
                      data: {
                        aggregateType: "MAX",
                        columnReference: {
                          name: "possimus",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "MONTH",
                          },
                          histogramRule: {
                            intervalSize: 66.099998,
                            maxValue: 17.100000,
                            minValue: 4.100000,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 4862578439118469831,
                              endRowIndex: 752517761134582477,
                              sheetId: 1273002236734246986,
                              startColumnIndex: 4619902900712649295,
                              startRowIndex: 7713582852089348810,
                            },
                            {
                              endColumnIndex: 8928279299604949249,
                              endRowIndex: 786906762951619877,
                              sheetId: 3831348013377475477,
                              startColumnIndex: 8720112367590168634,
                              startRowIndex: 6756589778755573754,
                            },
                          ],
                        },
                      },
                    },
                    openSeries: {
                      data: {
                        aggregateType: "MAX",
                        columnReference: {
                          name: "mollitia",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR",
                          },
                          histogramRule: {
                            intervalSize: 88.099998,
                            maxValue: 14.200000,
                            minValue: 73.099998,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 305372514684770812,
                              endRowIndex: 5225893734117173763,
                              sheetId: 772955188029962833,
                              startColumnIndex: 5285037629052427822,
                              startRowIndex: 2528774903950945048,
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
                domain: {
                  data: {
                    aggregateType: "MAX",
                    columnReference: {
                      name: "est",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "HOUR_MINUTE",
                      },
                      histogramRule: {
                        intervalSize: 50.200001,
                        maxValue: 40.200001,
                        minValue: 15.100000,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 1633894818751791494,
                          endRowIndex: 8972326238185101655,
                          sheetId: 3904448004966248077,
                          startColumnIndex: 7927756847757847844,
                          startRowIndex: 6472811596460080871,
                        },
                        {
                          endColumnIndex: 724714456398674815,
                          endRowIndex: 2352450483496531,
                          sheetId: 5025399840478864878,
                          startColumnIndex: 7507891091706844722,
                          startRowIndex: 2798604607757062361,
                        },
                        {
                          endColumnIndex: 4940604587824738184,
                          endRowIndex: 5070371358617235014,
                          sheetId: 8730494086894156724,
                          startColumnIndex: 8251210013231695231,
                          startRowIndex: 8611440976080286610,
                        },
                      ],
                    },
                  },
                  reversed: false,
                },
              },
              dataSourceChartProperties: {
                dataExecutionStatus: {
                  errorCode: "TOO_MANY_CHARS_PER_CELL",
                  errorMessage: "aut",
                  lastRefreshTime: "sapiente",
                  state: "NOT_STARTED",
                },
                dataSourceId: "illum",
              },
              filterSpecs: [
                {
                  columnIndex: 3218068204739913503,
                  dataSourceColumnReference: {
                    name: "voluptatibus",
                  },
                  filterCriteria: {
                    condition: {
                      type: "BLANK",
                      values: [
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "rerum",
                        },
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "voluptas",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "aliquam",
                        },
                      ],
                    },
                    hiddenValues: [
                      "consequatur",
                    ],
                    visibleBackgroundColor: {
                      alpha: 18.100000,
                      blue: 50.099998,
                      green: 51.099998,
                      red: 28.200001,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 49.200001,
                        blue: 66.199997,
                        green: 95.199997,
                        red: 3.100000,
                      },
                      themeColor: "ACCENT6",
                    },
                    visibleForegroundColor: {
                      alpha: 16.100000,
                      blue: 1.100000,
                      green: 62.099998,
                      red: 83.199997,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 73.199997,
                        blue: 93.199997,
                        green: 47.200001,
                        red: 3.100000,
                      },
                      themeColor: "ACCENT4",
                    },
                  },
                },
                {
                  columnIndex: 1828100375129961491,
                  dataSourceColumnReference: {
                    name: "officiis",
                  },
                  filterCriteria: {
                    condition: {
                      type: "NUMBER_NOT_EQ",
                      values: [
                        {
                          relativeDate: "PAST_YEAR",
                          userEnteredValue: "laboriosam",
                        },
                      ],
                    },
                    hiddenValues: [
                      "alias",
                      "sint",
                      "rerum",
                    ],
                    visibleBackgroundColor: {
                      alpha: 18.100000,
                      blue: 66.099998,
                      green: 49.099998,
                      red: 59.200001,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 23.100000,
                        blue: 71.099998,
                        green: 64.199997,
                        red: 42.099998,
                      },
                      themeColor: "BACKGROUND",
                    },
                    visibleForegroundColor: {
                      alpha: 14.100000,
                      blue: 3.200000,
                      green: 54.099998,
                      red: 76.099998,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 73.099998,
                        blue: 16.100000,
                        green: 54.200001,
                        red: 26.200001,
                      },
                      themeColor: "ACCENT5",
                    },
                  },
                },
                {
                  columnIndex: 9013246784351907804,
                  dataSourceColumnReference: {
                    name: "nihil",
                  },
                  filterCriteria: {
                    condition: {
                      type: "TEXT_CONTAINS",
                      values: [
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "dignissimos",
                        },
                        {
                          relativeDate: "YESTERDAY",
                          userEnteredValue: "rerum",
                        },
                      ],
                    },
                    hiddenValues: [
                      "cumque",
                    ],
                    visibleBackgroundColor: {
                      alpha: 61.099998,
                      blue: 16.200001,
                      green: 45.200001,
                      red: 13.100000,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 30.100000,
                        blue: 7.100000,
                        green: 57.200001,
                        red: 54.099998,
                      },
                      themeColor: "ACCENT1",
                    },
                    visibleForegroundColor: {
                      alpha: 47.099998,
                      blue: 89.099998,
                      green: 75.199997,
                      red: 45.099998,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 77.199997,
                        blue: 28.100000,
                        green: 9.200000,
                        red: 3.200000,
                      },
                      themeColor: "TEXT",
                    },
                  },
                },
              ],
              fontName: "quis",
              hiddenDimensionStrategy: "SKIP_HIDDEN_ROWS_AND_COLUMNS",
              histogramChart: {
                bucketSize: 74.099998,
                legendPosition: "TOP_LEGEND",
                outlierPercentile: 79.099998,
                series: [
                  {
                    barColor: {
                      alpha: 82.199997,
                      blue: 21.200001,
                      green: 85.099998,
                      red: 71.199997,
                    },
                    barColorStyle: {
                      rgbColor: {
                        alpha: 85.199997,
                        blue: 17.200001,
                        green: 76.199997,
                        red: 93.199997,
                      },
                      themeColor: "LINK",
                    },
                    data: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "facilis",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_OF_WEEK",
                        },
                        histogramRule: {
                          intervalSize: 8.100000,
                          maxValue: 74.099998,
                          minValue: 19.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 7534386497909980127,
                            endRowIndex: 4302825723484992853,
                            sheetId: 5418777595780852513,
                            startColumnIndex: 7714485373152911456,
                            startRowIndex: 1417456583255077006,
                          },
                          {
                            endColumnIndex: 6828705490106062094,
                            endRowIndex: 3443313708132672472,
                            sheetId: 9074155871002943895,
                            startColumnIndex: 1719116643479631043,
                            startRowIndex: 3378290771101947886,
                          },
                        ],
                      },
                    },
                  },
                  {
                    barColor: {
                      alpha: 39.099998,
                      blue: 23.100000,
                      green: 25.100000,
                      red: 98.099998,
                    },
                    barColorStyle: {
                      rgbColor: {
                        alpha: 46.099998,
                        blue: 2.200000,
                        green: 6.100000,
                        red: 87.199997,
                      },
                      themeColor: "ACCENT6",
                    },
                    data: {
                      aggregateType: "MAX",
                      columnReference: {
                        name: "animi",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_OF_MONTH",
                        },
                        histogramRule: {
                          intervalSize: 13.100000,
                          maxValue: 2.200000,
                          minValue: 93.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 7441782805380735170,
                            endRowIndex: 4545714707006854559,
                            sheetId: 7139798116733920682,
                            startColumnIndex: 4205577991234735507,
                            startRowIndex: 359884150389730269,
                          },
                          {
                            endColumnIndex: 3942683958299414956,
                            endRowIndex: 139081560723690167,
                            sheetId: 2859823249828412376,
                            startColumnIndex: 7709659681974026479,
                            startRowIndex: 5058203176136676755,
                          },
                          {
                            endColumnIndex: 3732599823054707550,
                            endRowIndex: 5933771316509337267,
                            sheetId: 8561355717730129785,
                            startColumnIndex: 8524604930434531787,
                            startRowIndex: 1486660028382104854,
                          },
                        ],
                      },
                    },
                  },
                ],
                showItemDividers: true,
              },
              maximized: true,
              orgChart: {
                labels: {
                  aggregateType: "MEDIAN",
                  columnReference: {
                    name: "officia",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH_DAY",
                    },
                    histogramRule: {
                      intervalSize: 24.100000,
                      maxValue: 62.099998,
                      minValue: 59.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6589369205296051871,
                        endRowIndex: 4607170022104045153,
                        sheetId: 4587584600769946434,
                        startColumnIndex: 1662858163406981694,
                        startRowIndex: 3545510621752697480,
                      },
                      {
                        endColumnIndex: 6479501734999581002,
                        endRowIndex: 1557827066090054247,
                        sheetId: 6415534030009811146,
                        startColumnIndex: 1241673916042014444,
                        startRowIndex: 3111521527591310462,
                      },
                    ],
                  },
                },
                nodeColor: {
                  alpha: 86.199997,
                  blue: 5.200000,
                  green: 27.100000,
                  red: 80.099998,
                },
                nodeColorStyle: {
                  rgbColor: {
                    alpha: 81.099998,
                    blue: 99.099998,
                    green: 8.100000,
                    red: 13.100000,
                  },
                  themeColor: "ACCENT5",
                },
                nodeSize: "LARGE",
                parentLabels: {
                  aggregateType: "AVERAGE",
                  columnReference: {
                    name: "perferendis",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_WEEK",
                    },
                    histogramRule: {
                      intervalSize: 55.099998,
                      maxValue: 21.200001,
                      minValue: 81.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6268214712313234530,
                        endRowIndex: 2383680298881359221,
                        sheetId: 4491150268011532901,
                        startColumnIndex: 6005505089503403209,
                        startRowIndex: 3965565866304427294,
                      },
                      {
                        endColumnIndex: 4252304479572440280,
                        endRowIndex: 2789446210537284988,
                        sheetId: 5618728485855793373,
                        startColumnIndex: 5693522499747542758,
                        startRowIndex: 8339937181128989116,
                      },
                    ],
                  },
                },
                selectedNodeColor: {
                  alpha: 48.099998,
                  blue: 12.100000,
                  green: 44.200001,
                  red: 76.199997,
                },
                selectedNodeColorStyle: {
                  rgbColor: {
                    alpha: 16.200001,
                    blue: 54.200001,
                    green: 71.199997,
                    red: 11.200000,
                  },
                  themeColor: "LINK",
                },
                tooltips: {
                  aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                  columnReference: {
                    name: "quidem",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "MINUTE",
                    },
                    histogramRule: {
                      intervalSize: 68.099998,
                      maxValue: 95.099998,
                      minValue: 23.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 8169721883483236346,
                        endRowIndex: 6092123836093934361,
                        sheetId: 3673871625553146503,
                        startColumnIndex: 6513087228958525518,
                        startRowIndex: 1587653471700805620,
                      },
                      {
                        endColumnIndex: 4054021261078865484,
                        endRowIndex: 7299346572673953896,
                        sheetId: 2592704707205455570,
                        startColumnIndex: 7796233988844302531,
                        startRowIndex: 6887921880011396605,
                      },
                      {
                        endColumnIndex: 4479709792729940133,
                        endRowIndex: 6557754953233486291,
                        sheetId: 1040923016893498604,
                        startColumnIndex: 6684518579568645089,
                        startRowIndex: 8169981646656152574,
                      },
                    ],
                  },
                },
              },
              pieChart: {
                domain: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "dignissimos",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 11.200000,
                      maxValue: 33.099998,
                      minValue: 75.199997,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 2219216522225640239,
                        endRowIndex: 6165708931410140141,
                        sheetId: 1969411478523486344,
                        startColumnIndex: 3452538569462033601,
                        startRowIndex: 5685859280924481529,
                      },
                      {
                        endColumnIndex: 8354352785564907570,
                        endRowIndex: 3918892489685569998,
                        sheetId: 666026038731221940,
                        startColumnIndex: 2323857277367964563,
                        startRowIndex: 232470657690438907,
                      },
                      {
                        endColumnIndex: 403655487129169118,
                        endRowIndex: 6729344322352083544,
                        sheetId: 6078385646443293181,
                        startColumnIndex: 4858962391617148137,
                        startRowIndex: 912586519794324583,
                      },
                    ],
                  },
                },
                legendPosition: "TOP_LEGEND",
                pieHole: 40.200001,
                series: {
                  aggregateType: "MEDIAN",
                  columnReference: {
                    name: "ex",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE",
                    },
                    histogramRule: {
                      intervalSize: 70.099998,
                      maxValue: 48.099998,
                      minValue: 22.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6218553844491323965,
                        endRowIndex: 4776944849958481095,
                        sheetId: 5188887081531957714,
                        startColumnIndex: 3164095758569733325,
                        startRowIndex: 4173856223179050378,
                      },
                    ],
                  },
                },
                threeDimensional: true,
              },
              scorecardChart: {
                aggregateType: "COUNT",
                baselineValueData: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "unde",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE_AMPM",
                    },
                    histogramRule: {
                      intervalSize: 74.199997,
                      maxValue: 83.099998,
                      minValue: 9.100000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 8468529816268709185,
                        endRowIndex: 9190245697914950610,
                        sheetId: 31691404501517563,
                        startColumnIndex: 6403623197714185272,
                        startRowIndex: 6575386978623031234,
                      },
                      {
                        endColumnIndex: 5085482767150325293,
                        endRowIndex: 2932021809505108106,
                        sheetId: 4471888964925182575,
                        startColumnIndex: 560065682059044445,
                        startRowIndex: 8453111293102697328,
                      },
                      {
                        endColumnIndex: 8050180907727133255,
                        endRowIndex: 375490490854152352,
                        sheetId: 3589409366641884179,
                        startColumnIndex: 3296349901156962935,
                        startRowIndex: 1516868876597247659,
                      },
                    ],
                  },
                },
                baselineValueFormat: {
                  comparisonType: "PERCENTAGE_DIFFERENCE",
                  description: "voluptatem",
                  negativeColor: {
                    alpha: 71.099998,
                    blue: 64.199997,
                    green: 65.099998,
                    red: 82.099998,
                  },
                  negativeColorStyle: {
                    rgbColor: {
                      alpha: 29.200001,
                      blue: 78.099998,
                      green: 78.199997,
                      red: 37.099998,
                    },
                    themeColor: "ACCENT1",
                  },
                  position: {
                    horizontalAlignment: "LEFT",
                  },
                  positiveColor: {
                    alpha: 27.100000,
                    blue: 84.099998,
                    green: 71.199997,
                    red: 51.099998,
                  },
                  positiveColorStyle: {
                    rgbColor: {
                      alpha: 52.099998,
                      blue: 81.199997,
                      green: 51.200001,
                      red: 82.199997,
                    },
                    themeColor: "ACCENT1",
                  },
                  textFormat: {
                    bold: false,
                    fontFamily: "occaecati",
                    fontSize: 3617031339215752545,
                    foregroundColor: {
                      alpha: 75.099998,
                      blue: 14.100000,
                      green: 21.200001,
                      red: 82.199997,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 82.099998,
                        blue: 73.199997,
                        green: 8.200000,
                        red: 38.099998,
                      },
                      themeColor: "TEXT",
                    },
                    italic: false,
                    link: {
                      uri: "minus",
                    },
                    strikethrough: true,
                    underline: false,
                  },
                },
                customFormatOptions: {
                  prefix: "aut",
                  suffix: "ut",
                },
                keyValueData: {
                  aggregateType: "AVERAGE",
                  columnReference: {
                    name: "quidem",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 53.200001,
                      maxValue: 53.200001,
                      minValue: 8.200000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 7819017358346247251,
                        endRowIndex: 5668804045862632852,
                        sheetId: 5871693267245557787,
                        startColumnIndex: 403730539684435223,
                        startRowIndex: 8105403229103356387,
                      },
                      {
                        endColumnIndex: 7769592204742026477,
                        endRowIndex: 3576937958363511419,
                        sheetId: 3155140529922400360,
                        startColumnIndex: 5499444564910461389,
                        startRowIndex: 7019045051750571734,
                      },
                      {
                        endColumnIndex: 144987751768127843,
                        endRowIndex: 8324521794704589691,
                        sheetId: 8212087544490937556,
                        startColumnIndex: 6134280284877194396,
                        startRowIndex: 2305484000740137302,
                      },
                    ],
                  },
                },
                keyValueFormat: {
                  position: {
                    horizontalAlignment: "LEFT",
                  },
                  textFormat: {
                    bold: false,
                    fontFamily: "ab",
                    fontSize: 7882466110833129394,
                    foregroundColor: {
                      alpha: 70.199997,
                      blue: 67.199997,
                      green: 94.199997,
                      red: 59.099998,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 29.100000,
                        blue: 5.200000,
                        green: 2.200000,
                        red: 67.099998,
                      },
                      themeColor: "TEXT",
                    },
                    italic: false,
                    link: {
                      uri: "unde",
                    },
                    strikethrough: true,
                    underline: true,
                  },
                },
                numberFormatSource: "FROM_DATA",
                scaleFactor: 86.199997,
              },
              sortSpecs: [
                {
                  backgroundColor: {
                    alpha: 96.199997,
                    blue: 2.100000,
                    green: 72.199997,
                    red: 27.100000,
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      alpha: 22.100000,
                      blue: 11.200000,
                      green: 7.100000,
                      red: 15.200000,
                    },
                    themeColor: "ACCENT2",
                  },
                  dataSourceColumnReference: {
                    name: "illo",
                  },
                  dimensionIndex: 2115215847518442816,
                  foregroundColor: {
                    alpha: 12.200000,
                    blue: 48.099998,
                    green: 74.199997,
                    red: 72.199997,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 90.099998,
                      blue: 14.200000,
                      green: 45.200001,
                      red: 4.100000,
                    },
                    themeColor: "ACCENT4",
                  },
                  sortOrder: "ASCENDING",
                },
                {
                  backgroundColor: {
                    alpha: 19.200001,
                    blue: 64.099998,
                    green: 64.099998,
                    red: 59.200001,
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      alpha: 26.100000,
                      blue: 20.100000,
                      green: 16.200001,
                      red: 70.199997,
                    },
                    themeColor: "TEXT",
                  },
                  dataSourceColumnReference: {
                    name: "corporis",
                  },
                  dimensionIndex: 8536466916037868527,
                  foregroundColor: {
                    alpha: 2.200000,
                    blue: 56.099998,
                    green: 18.100000,
                    red: 31.100000,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 57.200001,
                      blue: 98.099998,
                      green: 74.099998,
                      red: 60.200001,
                    },
                    themeColor: "LINK",
                  },
                  sortOrder: "ASCENDING",
                },
              ],
              subtitle: "labore",
              subtitleTextFormat: {
                bold: true,
                fontFamily: "perspiciatis",
                fontSize: 1980422540785426165,
                foregroundColor: {
                  alpha: 87.199997,
                  blue: 18.100000,
                  green: 38.200001,
                  red: 27.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 35.200001,
                    blue: 38.099998,
                    green: 71.199997,
                    red: 10.100000,
                  },
                  themeColor: "TEXT",
                },
                italic: true,
                link: {
                  uri: "a",
                },
                strikethrough: false,
                underline: false,
              },
              subtitleTextPosition: {
                horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
              },
              title: "beatae",
              titleTextFormat: {
                bold: false,
                fontFamily: "delectus",
                fontSize: 4577466162994996837,
                foregroundColor: {
                  alpha: 14.200000,
                  blue: 29.100000,
                  green: 7.100000,
                  red: 99.199997,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 28.100000,
                    blue: 88.099998,
                    green: 97.199997,
                    red: 38.099998,
                  },
                  themeColor: "ACCENT5",
                },
                italic: false,
                link: {
                  uri: "error",
                },
                strikethrough: false,
                underline: true,
              },
              titleTextPosition: {
                horizontalAlignment: "CENTER",
              },
              treemapChart: {
                colorData: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "qui",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 42.099998,
                      maxValue: 40.200001,
                      minValue: 34.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6776097440344547391,
                        endRowIndex: 9209703180196612341,
                        sheetId: 168903062502834063,
                        startColumnIndex: 4373372704118220844,
                        startRowIndex: 8371861384640183086,
                      },
                    ],
                  },
                },
                colorScale: {
                  maxValueColor: {
                    alpha: 46.200001,
                    blue: 17.100000,
                    green: 37.099998,
                    red: 58.099998,
                  },
                  maxValueColorStyle: {
                    rgbColor: {
                      alpha: 22.100000,
                      blue: 74.199997,
                      green: 11.200000,
                      red: 23.200001,
                    },
                    themeColor: "ACCENT6",
                  },
                  midValueColor: {
                    alpha: 53.200001,
                    blue: 91.199997,
                    green: 83.199997,
                    red: 25.200001,
                  },
                  midValueColorStyle: {
                    rgbColor: {
                      alpha: 39.099998,
                      blue: 62.099998,
                      green: 92.199997,
                      red: 92.199997,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  minValueColor: {
                    alpha: 23.100000,
                    blue: 50.099998,
                    green: 56.200001,
                    red: 13.100000,
                  },
                  minValueColorStyle: {
                    rgbColor: {
                      alpha: 31.200001,
                      blue: 6.100000,
                      green: 13.200000,
                      red: 39.099998,
                    },
                    themeColor: "LINK",
                  },
                  noDataColor: {
                    alpha: 7.200000,
                    blue: 83.199997,
                    green: 30.100000,
                    red: 6.100000,
                  },
                  noDataColorStyle: {
                    rgbColor: {
                      alpha: 18.100000,
                      blue: 71.099998,
                      green: 92.199997,
                      red: 59.099998,
                    },
                    themeColor: "ACCENT2",
                  },
                },
                headerColor: {
                  alpha: 8.100000,
                  blue: 42.099998,
                  green: 82.199997,
                  red: 78.099998,
                },
                headerColorStyle: {
                  rgbColor: {
                    alpha: 64.099998,
                    blue: 82.099998,
                    green: 57.200001,
                    red: 43.200001,
                  },
                  themeColor: "ACCENT2",
                },
                hideTooltips: true,
                hintedLevels: 15379975039793247,
                labels: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "odit",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR",
                    },
                    histogramRule: {
                      intervalSize: 44.099998,
                      maxValue: 77.099998,
                      minValue: 26.100000,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6953350799272126975,
                        endRowIndex: 2615412921922110491,
                        sheetId: 6113414174185696060,
                        startColumnIndex: 7971909854531790090,
                        startRowIndex: 5878394127080137609,
                      },
                      {
                        endColumnIndex: 6838842105442379889,
                        endRowIndex: 3735305738386028051,
                        sheetId: 2279850133785124664,
                        startColumnIndex: 5478994025080912286,
                        startRowIndex: 1894999680908425123,
                      },
                    ],
                  },
                },
                levels: 1004054227038383982,
                maxValue: 85.199997,
                minValue: 22.100000,
                parentLabels: {
                  aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                  columnReference: {
                    name: "recusandae",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "DAY_OF_WEEK",
                    },
                    histogramRule: {
                      intervalSize: 29.100000,
                      maxValue: 99.099998,
                      minValue: 48.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 4995407399693848746,
                        endRowIndex: 6016613730724857759,
                        sheetId: 2391274683601891508,
                        startColumnIndex: 697730318379041268,
                        startRowIndex: 8788199260895359104,
                      },
                      {
                        endColumnIndex: 4368270936950573404,
                        endRowIndex: 3433890413584999215,
                        sheetId: 7664794407965900254,
                        startColumnIndex: 2050712925039070838,
                        startRowIndex: 8037443985178796309,
                      },
                    ],
                  },
                },
                sizeData: {
                  aggregateType: "MEDIAN",
                  columnReference: {
                    name: "quis",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH",
                    },
                    histogramRule: {
                      intervalSize: 33.099998,
                      maxValue: 51.099998,
                      minValue: 46.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 8852499193149167451,
                        endRowIndex: 3833695377387837639,
                        sheetId: 8548957881665160283,
                        startColumnIndex: 6134575804598630365,
                        startRowIndex: 3508785443008161907,
                      },
                      {
                        endColumnIndex: 499106258613268017,
                        endRowIndex: 3109334903968757173,
                        sheetId: 126131060631319925,
                        startColumnIndex: 6369372731399833658,
                        startRowIndex: 3322038500635220765,
                      },
                      {
                        endColumnIndex: 3654939043457787099,
                        endRowIndex: 5242124931276664955,
                        sheetId: 4797710460873983788,
                        startColumnIndex: 3077514529290061008,
                        startRowIndex: 310708047056019681,
                      },
                    ],
                  },
                },
                textFormat: {
                  bold: false,
                  fontFamily: "qui",
                  fontSize: 6089823975678217953,
                  foregroundColor: {
                    alpha: 62.200001,
                    blue: 90.099998,
                    green: 30.200001,
                    red: 16.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 20.200001,
                      blue: 21.100000,
                      green: 95.199997,
                      red: 52.099998,
                    },
                    themeColor: "BACKGROUND",
                  },
                  italic: false,
                  link: {
                    uri: "suscipit",
                  },
                  strikethrough: false,
                  underline: false,
                },
              },
              waterfallChart: {
                connectorLineStyle: {
                  type: "LONG_DASHED_DOTTED",
                  width: 5368037462707478020,
                },
                domain: {
                  data: {
                    aggregateType: "MAX",
                    columnReference: {
                      name: "assumenda",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "YEAR_MONTH_DAY",
                      },
                      histogramRule: {
                        intervalSize: 96.199997,
                        maxValue: 88.099998,
                        minValue: 69.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 4987595519251318360,
                          endRowIndex: 5696932853458781259,
                          sheetId: 3628455997977240002,
                          startColumnIndex: 4887758367940139517,
                          startRowIndex: 7309764349498576925,
                        },
                        {
                          endColumnIndex: 4869872540384859814,
                          endRowIndex: 4309205651636750619,
                          sheetId: 8747549318093475727,
                          startColumnIndex: 1199847227655705894,
                          startRowIndex: 871825768681541317,
                        },
                      ],
                    },
                  },
                  reversed: false,
                },
                firstValueIsTotal: true,
                hideConnectorLines: true,
                series: [
                  {
                    customSubtotals: [
                      {
                        dataIsSubtotal: false,
                        label: "omnis",
                        subtotalIndex: 7192823615647804432,
                      },
                      {
                        dataIsSubtotal: true,
                        label: "veniam",
                        subtotalIndex: 8405730962746654169,
                      },
                    ],
                    data: {
                      aggregateType: "MAX",
                      columnReference: {
                        name: "earum",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_OF_WEEK",
                        },
                        histogramRule: {
                          intervalSize: 23.200001,
                          maxValue: 79.199997,
                          minValue: 97.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 8886103047576795564,
                            endRowIndex: 1151739695085553742,
                            sheetId: 1781180916185036440,
                            startColumnIndex: 6093770731643756431,
                            startRowIndex: 1042588251045493768,
                          },
                          {
                            endColumnIndex: 4651555367306810737,
                            endRowIndex: 7998918141059477473,
                            sheetId: 8672298498654467013,
                            startColumnIndex: 4688846887242814811,
                            startRowIndex: 3805605927538300623,
                          },
                        ],
                      },
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "MAX",
                        columnReference: {
                          name: "ipsa",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR_MINUTE",
                          },
                          histogramRule: {
                            intervalSize: 58.099998,
                            maxValue: 72.199997,
                            minValue: 56.099998,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 8262049454214712528,
                              endRowIndex: 2018568938296751746,
                              sheetId: 8228147254359075253,
                              startColumnIndex: 7457628600142783027,
                              startRowIndex: 1595477363732338245,
                            },
                            {
                              endColumnIndex: 7105226430855046575,
                              endRowIndex: 1652123903750549281,
                              sheetId: 36795976058588079,
                              startColumnIndex: 4876808571180970537,
                              startRowIndex: 4894553786394480352,
                            },
                            {
                              endColumnIndex: 1244639938501907027,
                              endRowIndex: 128337864893519687,
                              sheetId: 4188824301903803709,
                              startColumnIndex: 7618625948490822713,
                              startRowIndex: 7858352634455298629,
                            },
                          ],
                        },
                      },
                      placement: "OUTSIDE_END",
                      textFormat: {
                        bold: true,
                        fontFamily: "ea",
                        fontSize: 6074200560038735299,
                        foregroundColor: {
                          alpha: 12.100000,
                          blue: 0.200000,
                          green: 30.100000,
                          red: 50.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 87.099998,
                            blue: 83.199997,
                            green: 23.100000,
                            red: 52.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        italic: true,
                        link: {
                          uri: "voluptas",
                        },
                        strikethrough: false,
                        underline: false,
                      },
                      type: "NONE",
                    },
                    hideTrailingSubtotal: true,
                    negativeColumnsStyle: {
                      color: {
                        alpha: 5.100000,
                        blue: 43.200001,
                        green: 84.099998,
                        red: 20.200001,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 71.099998,
                          blue: 96.099998,
                          green: 32.200001,
                          red: 84.199997,
                        },
                        themeColor: "ACCENT3",
                      },
                      label: "pariatur",
                    },
                    positiveColumnsStyle: {
                      color: {
                        alpha: 59.099998,
                        blue: 34.200001,
                        green: 40.200001,
                        red: 32.200001,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 87.199997,
                          blue: 80.199997,
                          green: 85.099998,
                          red: 54.099998,
                        },
                        themeColor: "TEXT",
                      },
                      label: "aut",
                    },
                    subtotalColumnsStyle: {
                      color: {
                        alpha: 48.099998,
                        blue: 59.099998,
                        green: 60.099998,
                        red: 15.200000,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 90.099998,
                          blue: 79.099998,
                          green: 71.199997,
                          red: 22.200001,
                        },
                        themeColor: "BACKGROUND",
                      },
                      label: "quia",
                    },
                  },
                  {
                    customSubtotals: [
                      {
                        dataIsSubtotal: false,
                        label: "commodi",
                        subtotalIndex: 6118585661170049864,
                      },
                      {
                        dataIsSubtotal: false,
                        label: "qui",
                        subtotalIndex: 669361249713250366,
                      },
                    ],
                    data: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "et",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR",
                        },
                        histogramRule: {
                          intervalSize: 35.200001,
                          maxValue: 87.199997,
                          minValue: 21.100000,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 830446217194048787,
                            endRowIndex: 8861769612488430656,
                            sheetId: 4437641210950790800,
                            startColumnIndex: 3778641244301750275,
                            startRowIndex: 4207280901924795547,
                          },
                          {
                            endColumnIndex: 3891040177384159021,
                            endRowIndex: 3253888159922096768,
                            sheetId: 6052870979173969057,
                            startColumnIndex: 2342999007816606444,
                            startRowIndex: 8622129398629311053,
                          },
                          {
                            endColumnIndex: 2779057611153423024,
                            endRowIndex: 2159576890564358180,
                            sheetId: 3103707084090900675,
                            startColumnIndex: 2788845704323056376,
                            startRowIndex: 2346567451965329449,
                          },
                        ],
                      },
                    },
                    dataLabel: {
                      customLabelData: {
                        aggregateType: "MEDIAN",
                        columnReference: {
                          name: "rerum",
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_YEAR",
                          },
                          histogramRule: {
                            intervalSize: 13.200000,
                            maxValue: 78.099998,
                            minValue: 28.200001,
                          },
                        },
                        sourceRange: {
                          sources: [
                            {
                              endColumnIndex: 7715555944651884526,
                              endRowIndex: 2082518646678851117,
                              sheetId: 4295403409524586083,
                              startColumnIndex: 3681029753242521909,
                              startRowIndex: 6960997987580097947,
                            },
                          ],
                        },
                      },
                      placement: "DATA_LABEL_PLACEMENT_UNSPECIFIED",
                      textFormat: {
                        bold: false,
                        fontFamily: "ab",
                        fontSize: 1047682775121784293,
                        foregroundColor: {
                          alpha: 4.200000,
                          blue: 93.099998,
                          green: 54.099998,
                          red: 5.200000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 15.200000,
                            blue: 23.100000,
                            green: 48.099998,
                            red: 61.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        italic: false,
                        link: {
                          uri: "possimus",
                        },
                        strikethrough: false,
                        underline: true,
                      },
                      type: "CUSTOM",
                    },
                    hideTrailingSubtotal: true,
                    negativeColumnsStyle: {
                      color: {
                        alpha: 8.200000,
                        blue: 26.200001,
                        green: 32.200001,
                        red: 33.099998,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 20.200001,
                          blue: 85.199997,
                          green: 24.100000,
                          red: 55.099998,
                        },
                        themeColor: "ACCENT2",
                      },
                      label: "odio",
                    },
                    positiveColumnsStyle: {
                      color: {
                        alpha: 27.100000,
                        blue: 16.200001,
                        green: 2.200000,
                        red: 37.200001,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 89.199997,
                          blue: 27.200001,
                          green: 63.099998,
                          red: 19.100000,
                        },
                        themeColor: "TEXT",
                      },
                      label: "fuga",
                    },
                    subtotalColumnsStyle: {
                      color: {
                        alpha: 68.099998,
                        blue: 42.099998,
                        green: 5.200000,
                        red: 0.200000,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 31.200001,
                          blue: 61.099998,
                          green: 1.100000,
                          red: 47.099998,
                        },
                        themeColor: "ACCENT1",
                      },
                      label: "velit",
                    },
                  },
                ],
                stackedType: "WATERFALL_STACKED_TYPE_UNSPECIFIED",
                totalDataLabel: {
                  customLabelData: {
                    aggregateType: "MAX",
                    columnReference: {
                      name: "assumenda",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "MONTH",
                      },
                      histogramRule: {
                        intervalSize: 53.099998,
                        maxValue: 24.200001,
                        minValue: 62.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 5521823953362542149,
                          endRowIndex: 2771134850605058944,
                          sheetId: 4278655559572830228,
                          startColumnIndex: 3152940648288133919,
                          startRowIndex: 2370100568689262856,
                        },
                      ],
                    },
                  },
                  placement: "INSIDE_END",
                  textFormat: {
                    bold: false,
                    fontFamily: "et",
                    fontSize: 400436857879841225,
                    foregroundColor: {
                      alpha: 1.200000,
                      blue: 45.200001,
                      green: 86.099998,
                      red: 43.099998,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 2.200000,
                        blue: 33.200001,
                        green: 72.199997,
                        red: 53.200001,
                      },
                      themeColor: "ACCENT5",
                    },
                    italic: false,
                    link: {
                      uri: "ut",
                    },
                    strikethrough: true,
                    underline: true,
                  },
                  type: "DATA_LABEL_TYPE_UNSPECIFIED",
                },
              },
            },
          },
        },
        addConditionalFormatRule: {
          index: 6886530461441210028,
          rule: {
            booleanRule: {
              condition: {
                type: "DATE_NOT_BETWEEN",
                values: [
                  {
                    relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                    userEnteredValue: "facilis",
                  },
                  {
                    relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                    userEnteredValue: "fugit",
                  },
                ],
              },
              format: {
                backgroundColor: {
                  alpha: 14.100000,
                  blue: 94.199997,
                  green: 60.200001,
                  red: 79.199997,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 87.099998,
                    blue: 72.199997,
                    green: 25.100000,
                    red: 55.099998,
                  },
                  themeColor: "ACCENT3",
                },
                borders: {
                  bottom: {
                    color: {
                      alpha: 41.099998,
                      blue: 25.200001,
                      green: 81.199997,
                      red: 57.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 75.099998,
                        blue: 74.099998,
                        green: 53.099998,
                        red: 13.200000,
                      },
                      themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                    },
                    style: "DOTTED",
                    width: 3215295853325673916,
                  },
                  left: {
                    color: {
                      alpha: 49.200001,
                      blue: 97.099998,
                      green: 88.199997,
                      red: 7.100000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 39.099998,
                        blue: 6.200000,
                        green: 9.200000,
                        red: 92.099998,
                      },
                      themeColor: "TEXT",
                    },
                    style: "SOLID_THICK",
                    width: 4328183688623797016,
                  },
                  right: {
                    color: {
                      alpha: 74.099998,
                      blue: 76.199997,
                      green: 62.099998,
                      red: 73.199997,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 77.199997,
                        blue: 8.200000,
                        green: 7.100000,
                        red: 39.200001,
                      },
                      themeColor: "ACCENT4",
                    },
                    style: "SOLID",
                    width: 1902390517014993024,
                  },
                  top: {
                    color: {
                      alpha: 68.099998,
                      blue: 54.099998,
                      green: 91.199997,
                      red: 51.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 47.099998,
                        blue: 2.100000,
                        green: 62.200001,
                        red: 13.200000,
                      },
                      themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                    },
                    style: "DOTTED",
                    width: 6830386305225278104,
                  },
                },
                horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                hyperlinkDisplayType: "LINKED",
                numberFormat: {
                  pattern: "ratione",
                  type: "SCIENTIFIC",
                },
                padding: {
                  bottom: 1902352302706688403,
                  left: 5841684784969090376,
                  right: 4278020499967977875,
                  top: 8059207601409721460,
                },
                textDirection: "RIGHT_TO_LEFT",
                textFormat: {
                  bold: false,
                  fontFamily: "quasi",
                  fontSize: 6192634083260610818,
                  foregroundColor: {
                    alpha: 65.199997,
                    blue: 58.200001,
                    green: 65.199997,
                    red: 95.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 52.200001,
                      blue: 51.200001,
                      green: 35.200001,
                      red: 19.200001,
                    },
                    themeColor: "LINK",
                  },
                  italic: false,
                  link: {
                    uri: "dolores",
                  },
                  strikethrough: false,
                  underline: false,
                },
                textRotation: {
                  angle: 7426673154897410542,
                  vertical: false,
                },
                verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                wrapStrategy: "OVERFLOW_CELL",
              },
            },
            gradientRule: {
              maxpoint: {
                color: {
                  alpha: 57.200001,
                  blue: 16.200001,
                  green: 32.099998,
                  red: 16.200001,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 47.200001,
                    blue: 92.099998,
                    green: 34.099998,
                    red: 51.099998,
                  },
                  themeColor: "LINK",
                },
                type: "INTERPOLATION_POINT_TYPE_UNSPECIFIED",
                value: "maxime",
              },
              midpoint: {
                color: {
                  alpha: 64.199997,
                  blue: 26.200001,
                  green: 50.099998,
                  red: 75.199997,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 99.099998,
                    blue: 1.200000,
                    green: 77.199997,
                    red: 53.200001,
                  },
                  themeColor: "LINK",
                },
                type: "MAX",
                value: "facilis",
              },
              minpoint: {
                color: {
                  alpha: 62.099998,
                  blue: 66.099998,
                  green: 21.200001,
                  red: 77.099998,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 62.200001,
                    blue: 62.200001,
                    green: 81.099998,
                    red: 2.200000,
                  },
                  themeColor: "ACCENT2",
                },
                type: "NUMBER",
                value: "est",
              },
            },
            ranges: [
              {
                endColumnIndex: 8850224649368456287,
                endRowIndex: 7638305729516310772,
                sheetId: 2989851591969675477,
                startColumnIndex: 8880295244277304866,
                startRowIndex: 6978526048822600465,
              },
              {
                endColumnIndex: 1105419900436623934,
                endRowIndex: 4935737380772426091,
                sheetId: 5167757077406751122,
                startColumnIndex: 1485494915612388785,
                startRowIndex: 7584000574318193753,
              },
              {
                endColumnIndex: 7357289340380468452,
                endRowIndex: 9156558428948506713,
                sheetId: 2040183072072412617,
                startColumnIndex: 1997215573551108139,
                startRowIndex: 7284085746691871822,
              },
            ],
          },
        },
        addDataSource: {
          dataSource: {
            calculatedColumns: [
              {
                formula: "molestias",
                reference: {
                  name: "suscipit",
                },
              },
              {
                formula: "repellat",
                reference: {
                  name: "enim",
                },
              },
            ],
            dataSourceId: "minus",
            sheetId: 1679838679583009315,
            spec: {
              bigQuery: {
                projectId: "voluptas",
                querySpec: {
                  rawQuery: "sit",
                },
                tableSpec: {
                  datasetId: "ullam",
                  tableId: "blanditiis",
                  tableProjectId: "ad",
                },
              },
              parameters: [
                {
                  name: "molestiae",
                  namedRangeId: "ut",
                  range: {
                    endColumnIndex: 4302590073880366582,
                    endRowIndex: 7403823642650246595,
                    sheetId: 907053328262489605,
                    startColumnIndex: 1763977533357996015,
                    startRowIndex: 7572024435652553039,
                  },
                },
                {
                  name: "doloribus",
                  namedRangeId: "omnis",
                  range: {
                    endColumnIndex: 9173068344057843426,
                    endRowIndex: 917676316720765197,
                    sheetId: 5644690357414666492,
                    startColumnIndex: 6916762691694320834,
                    startRowIndex: 9051907311681989446,
                  },
                },
                {
                  name: "rerum",
                  namedRangeId: "deleniti",
                  range: {
                    endColumnIndex: 955975106681561918,
                    endRowIndex: 1701067638027178682,
                    sheetId: 7230160092590891153,
                    startColumnIndex: 2433027721106396706,
                    startRowIndex: 6279920293613220851,
                  },
                },
              ],
            },
          },
        },
        addDimensionGroup: {
          range: {
            dimension: "COLUMNS",
            endIndex: 6262275552256891092,
            sheetId: 2496231629320582781,
            startIndex: 3738775269863348972,
          },
        },
        addFilterView: {
          filter: {
            criteria: {
              "ducimus": {
                condition: {
                  type: "TEXT_EQ",
                  values: [
                    {
                      relativeDate: "YESTERDAY",
                      userEnteredValue: "voluptas",
                    },
                    {
                      relativeDate: "TODAY",
                      userEnteredValue: "et",
                    },
                    {
                      relativeDate: "PAST_YEAR",
                      userEnteredValue: "maxime",
                    },
                  ],
                },
                hiddenValues: [
                  "nostrum",
                  "earum",
                  "iusto",
                ],
                visibleBackgroundColor: {
                  alpha: 90.099998,
                  blue: 61.099998,
                  green: 90.199997,
                  red: 21.200001,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 79.099998,
                    blue: 85.099998,
                    green: 93.099998,
                    red: 37.099998,
                  },
                  themeColor: "ACCENT1",
                },
                visibleForegroundColor: {
                  alpha: 56.200001,
                  blue: 34.099998,
                  green: 3.200000,
                  red: 38.200001,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 8.200000,
                    blue: 33.200001,
                    green: 14.100000,
                    red: 71.199997,
                  },
                  themeColor: "ACCENT4",
                },
              },
            },
            filterSpecs: [
              {
                columnIndex: 7083693564423116036,
                dataSourceColumnReference: {
                  name: "praesentium",
                },
                filterCriteria: {
                  condition: {
                    type: "CONDITION_TYPE_UNSPECIFIED",
                    values: [
                      {
                        relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                        userEnteredValue: "sunt",
                      },
                      {
                        relativeDate: "TODAY",
                        userEnteredValue: "eligendi",
                      },
                      {
                        relativeDate: "PAST_YEAR",
                        userEnteredValue: "sed",
                      },
                    ],
                  },
                  hiddenValues: [
                    "corrupti",
                    "illum",
                  ],
                  visibleBackgroundColor: {
                    alpha: 95.099998,
                    blue: 58.200001,
                    green: 9.100000,
                    red: 80.199997,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 46.200001,
                      blue: 34.200001,
                      green: 1.200000,
                      red: 52.099998,
                    },
                    themeColor: "ACCENT4",
                  },
                  visibleForegroundColor: {
                    alpha: 73.099998,
                    blue: 78.099998,
                    green: 13.100000,
                    red: 82.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 63.200001,
                      blue: 84.099998,
                      green: 79.099998,
                      red: 17.100000,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                },
              },
              {
                columnIndex: 6310311862262055139,
                dataSourceColumnReference: {
                  name: "qui",
                },
                filterCriteria: {
                  condition: {
                    type: "NOT_BLANK",
                    values: [
                      {
                        relativeDate: "TODAY",
                        userEnteredValue: "officia",
                      },
                    ],
                  },
                  hiddenValues: [
                    "quam",
                    "fugit",
                  ],
                  visibleBackgroundColor: {
                    alpha: 66.099998,
                    blue: 74.099998,
                    green: 40.200001,
                    red: 69.099998,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 62.200001,
                      blue: 57.200001,
                      green: 40.200001,
                      red: 16.100000,
                    },
                    themeColor: "LINK",
                  },
                  visibleForegroundColor: {
                    alpha: 53.099998,
                    blue: 15.100000,
                    green: 84.199997,
                    red: 79.199997,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 51.099998,
                      blue: 79.099998,
                      green: 28.200001,
                      red: 40.099998,
                    },
                    themeColor: "ACCENT4",
                  },
                },
              },
            ],
            filterViewId: 1284922544186653915,
            namedRangeId: "sed",
            range: {
              endColumnIndex: 7320991599548081015,
              endRowIndex: 4902785367558924121,
              sheetId: 6712920357641531264,
              startColumnIndex: 9126123373979731281,
              startRowIndex: 8990378449848503123,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 35.099998,
                  blue: 19.200001,
                  green: 5.100000,
                  red: 70.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 59.099998,
                    blue: 14.200000,
                    green: 52.099998,
                    red: 54.200001,
                  },
                  themeColor: "TEXT",
                },
                dataSourceColumnReference: {
                  name: "aut",
                },
                dimensionIndex: 5507883650977404927,
                foregroundColor: {
                  alpha: 84.199997,
                  blue: 0.200000,
                  green: 69.199997,
                  red: 82.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 41.200001,
                    blue: 13.200000,
                    green: 70.199997,
                    red: 24.100000,
                  },
                  themeColor: "TEXT",
                },
                sortOrder: "SORT_ORDER_UNSPECIFIED",
              },
              {
                backgroundColor: {
                  alpha: 11.200000,
                  blue: 22.200001,
                  green: 2.200000,
                  red: 72.199997,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 28.200001,
                    blue: 77.199997,
                    green: 50.099998,
                    red: 20.200001,
                  },
                  themeColor: "ACCENT3",
                },
                dataSourceColumnReference: {
                  name: "modi",
                },
                dimensionIndex: 2929319050564958259,
                foregroundColor: {
                  alpha: 96.199997,
                  blue: 88.099998,
                  green: 27.100000,
                  red: 94.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 36.200001,
                    blue: 34.200001,
                    green: 66.099998,
                    red: 64.199997,
                  },
                  themeColor: "ACCENT6",
                },
                sortOrder: "ASCENDING",
              },
              {
                backgroundColor: {
                  alpha: 7.100000,
                  blue: 53.099998,
                  green: 12.200000,
                  red: 32.200001,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 90.099998,
                    blue: 1.100000,
                    green: 28.200001,
                    red: 15.200000,
                  },
                  themeColor: "LINK",
                },
                dataSourceColumnReference: {
                  name: "dolor",
                },
                dimensionIndex: 5737959395716134457,
                foregroundColor: {
                  alpha: 89.099998,
                  blue: 24.100000,
                  green: 27.100000,
                  red: 13.100000,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 19.200001,
                    blue: 91.099998,
                    green: 59.200001,
                    red: 36.200001,
                  },
                  themeColor: "ACCENT5",
                },
                sortOrder: "ASCENDING",
              },
            ],
            title: "expedita",
          },
        },
        addNamedRange: {
          namedRange: {
            name: "illo",
            namedRangeId: "et",
            range: {
              endColumnIndex: 8973999524560630602,
              endRowIndex: 5923177434551277940,
              sheetId: 717991812903000252,
              startColumnIndex: 4045395724668575981,
              startRowIndex: 8676740602121583695,
            },
          },
        },
        addProtectedRange: {
          protectedRange: {
            description: "voluptatum",
            editors: {
              domainUsersCanEdit: true,
              groups: [
                "in",
                "ut",
                "ut",
              ],
              users: [
                "dolorem",
                "saepe",
                "dicta",
              ],
            },
            namedRangeId: "eveniet",
            protectedRangeId: 9219847974947419061,
            range: {
              endColumnIndex: 3594644991239064480,
              endRowIndex: 8432099138259142243,
              sheetId: 4670838049230068378,
              startColumnIndex: 6639002185215492025,
              startRowIndex: 7184124746291884589,
            },
            requestingUserCanEdit: false,
            unprotectedRanges: [
              {
                endColumnIndex: 148472169230328129,
                endRowIndex: 6078560492475860131,
                sheetId: 4546215271729891590,
                startColumnIndex: 2645282993917441692,
                startRowIndex: 7776573885756038434,
              },
            ],
            warningOnly: true,
          },
        },
        addSheet: {
          properties: {
            dataSourceSheetProperties: {
              columns: [
                {
                  formula: "doloremque",
                  reference: {
                    name: "iusto",
                  },
                },
                {
                  formula: "esse",
                  reference: {
                    name: "sed",
                  },
                },
              ],
              dataExecutionStatus: {
                errorCode: "INTERRUPTED",
                errorMessage: "quis",
                lastRefreshTime: "aut",
                state: "NOT_STARTED",
              },
              dataSourceId: "quia",
            },
            gridProperties: {
              columnCount: 1700883206927892954,
              columnGroupControlAfter: true,
              frozenColumnCount: 9161238682897897574,
              frozenRowCount: 3897964768780635831,
              hideGridlines: true,
              rowCount: 6863679296420474665,
              rowGroupControlAfter: true,
            },
            hidden: true,
            index: 5189188826889961289,
            rightToLeft: false,
            sheetId: 6230043598476423993,
            sheetType: "GRID",
            tabColor: {
              alpha: 71.199997,
              blue: 22.100000,
              green: 23.100000,
              red: 8.100000,
            },
            tabColorStyle: {
              rgbColor: {
                alpha: 4.100000,
                blue: 49.200001,
                green: 39.200001,
                red: 81.199997,
              },
              themeColor: "ACCENT6",
            },
            title: "repellendus",
          },
        },
        addSlicer: {
          slicer: {
            position: {
              newSheet: false,
              overlayPosition: {
                anchorCell: {
                  columnIndex: 8602719076914495500,
                  rowIndex: 4613986114487905215,
                  sheetId: 5561741604978936196,
                },
                heightPixels: 4202263396739319245,
                offsetXPixels: 3268933780694275796,
                offsetYPixels: 7829613108998620707,
                widthPixels: 8487954635411431595,
              },
              sheetId: 8001253089831133892,
            },
            slicerId: 6252969556855683279,
            spec: {
              applyToPivotTables: true,
              backgroundColor: {
                alpha: 44.099998,
                blue: 63.099998,
                green: 2.200000,
                red: 77.099998,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 69.099998,
                  blue: 4.200000,
                  green: 33.099998,
                  red: 33.099998,
                },
                themeColor: "BACKGROUND",
              },
              columnIndex: 4331803314278496,
              dataRange: {
                endColumnIndex: 3531701708253004682,
                endRowIndex: 230247474416372263,
                sheetId: 6268150694038800738,
                startColumnIndex: 7690711408765813144,
                startRowIndex: 7538591299237854602,
              },
              filterCriteria: {
                condition: {
                  type: "CUSTOM_FORMULA",
                  values: [
                    {
                      relativeDate: "PAST_WEEK",
                      userEnteredValue: "et",
                    },
                  ],
                },
                hiddenValues: [
                  "in",
                ],
                visibleBackgroundColor: {
                  alpha: 97.099998,
                  blue: 24.200001,
                  green: 89.199997,
                  red: 2.100000,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 48.200001,
                    blue: 53.099998,
                    green: 3.200000,
                    red: 89.099998,
                  },
                  themeColor: "LINK",
                },
                visibleForegroundColor: {
                  alpha: 75.099998,
                  blue: 62.099998,
                  green: 93.199997,
                  red: 77.099998,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 49.200001,
                    blue: 12.100000,
                    green: 94.099998,
                    red: 12.200000,
                  },
                  themeColor: "ACCENT4",
                },
              },
              horizontalAlignment: "LEFT",
              textFormat: {
                bold: true,
                fontFamily: "error",
                fontSize: 1110793394818996736,
                foregroundColor: {
                  alpha: 15.200000,
                  blue: 13.200000,
                  green: 95.199997,
                  red: 12.100000,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 93.099998,
                    blue: 72.199997,
                    green: 71.099998,
                    red: 61.099998,
                  },
                  themeColor: "ACCENT2",
                },
                italic: false,
                link: {
                  uri: "repellendus",
                },
                strikethrough: false,
                underline: true,
              },
              title: "temporibus",
            },
          },
        },
        appendCells: {
          fields: "inventore",
          rows: [
            {
              values: [
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "TOO_MANY_COLUMNS",
                      errorMessage: "nemo",
                      lastRefreshTime: "facere",
                      state: "FAILED",
                    },
                    dataSourceId: "possimus",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SYNC_ALL",
                    columns: [
                      {
                        name: "sed",
                      },
                      {
                        name: "accusamus",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "TOO_MANY_CHARS_PER_CELL",
                      errorMessage: "molestias",
                      lastRefreshTime: "animi",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "culpa",
                    filterSpecs: [
                      {
                        columnIndex: 7032094874100795890,
                        dataSourceColumnReference: {
                          name: "velit",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_NOT_EQ",
                            values: [
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "fugiat",
                              },
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "voluptate",
                              },
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "hic",
                              },
                            ],
                          },
                          hiddenValues: [
                            "exercitationem",
                          ],
                          visibleBackgroundColor: {
                            alpha: 9.100000,
                            blue: 36.200001,
                            green: 95.199997,
                            red: 17.200001,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 27.100000,
                              blue: 85.099998,
                              green: 74.199997,
                              red: 5.200000,
                            },
                            themeColor: "LINK",
                          },
                          visibleForegroundColor: {
                            alpha: 38.200001,
                            blue: 23.200001,
                            green: 45.200001,
                            red: 52.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 35.200001,
                              blue: 8.200000,
                              green: 17.200001,
                              red: 11.100000,
                            },
                            themeColor: "TEXT",
                          },
                        },
                      },
                    ],
                    rowLimit: 3390286186302871447,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 95.199997,
                          blue: 51.200001,
                          green: 4.100000,
                          red: 90.199997,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 19.100000,
                            blue: 38.099998,
                            green: 24.200001,
                            red: 98.099998,
                          },
                          themeColor: "BACKGROUND",
                        },
                        dataSourceColumnReference: {
                          name: "nam",
                        },
                        dimensionIndex: 1112032492026068376,
                        foregroundColor: {
                          alpha: 98.099998,
                          blue: 5.200000,
                          green: 64.099998,
                          red: 35.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 21.100000,
                            blue: 60.099998,
                            green: 24.100000,
                            red: 82.099998,
                          },
                          themeColor: "TEXT",
                        },
                        sortOrder: "ASCENDING",
                      },
                      {
                        backgroundColor: {
                          alpha: 99.199997,
                          blue: 62.200001,
                          green: 72.099998,
                          red: 72.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 55.200001,
                            blue: 51.200001,
                            green: 77.199997,
                            red: 72.199997,
                          },
                          themeColor: "ACCENT2",
                        },
                        dataSourceColumnReference: {
                          name: "qui",
                        },
                        dimensionIndex: 1490197558823313254,
                        foregroundColor: {
                          alpha: 9.200000,
                          blue: 80.099998,
                          green: 23.100000,
                          red: 78.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 48.099998,
                            blue: 57.099998,
                            green: 97.199997,
                            red: 79.199997,
                          },
                          themeColor: "ACCENT3",
                        },
                        sortOrder: "ASCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "TEXT_IS_EMAIL",
                      values: [
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "ea",
                        },
                      ],
                    },
                    inputMessage: "similique",
                    showCustomUi: false,
                    strict: false,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 86.199997,
                      blue: 21.100000,
                      green: 78.199997,
                      red: 29.200001,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 81.199997,
                        blue: 46.099998,
                        green: 93.199997,
                        red: 75.199997,
                      },
                      themeColor: "ACCENT3",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 0.100000,
                          blue: 62.099998,
                          green: 60.200001,
                          red: 39.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 69.099998,
                            blue: 88.199997,
                            green: 36.200001,
                            red: 49.200001,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "DASHED",
                        width: 331302196388318317,
                      },
                      left: {
                        color: {
                          alpha: 10.100000,
                          blue: 48.200001,
                          green: 82.199997,
                          red: 51.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 65.199997,
                            blue: 69.099998,
                            green: 3.200000,
                            red: 26.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "SOLID_MEDIUM",
                        width: 8027691027619980338,
                      },
                      right: {
                        color: {
                          alpha: 75.099998,
                          blue: 49.099998,
                          green: 9.200000,
                          red: 98.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 27.200001,
                            blue: 56.200001,
                            green: 18.200001,
                            red: 80.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "SOLID_THICK",
                        width: 3791833210768464047,
                      },
                      top: {
                        color: {
                          alpha: 20.200001,
                          blue: 10.200000,
                          green: 35.200001,
                          red: 69.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 57.099998,
                            blue: 94.099998,
                            green: 23.200001,
                            red: 58.099998,
                          },
                          themeColor: "TEXT",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 1223643340062891302,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "quia",
                      type: "TIME",
                    },
                    padding: {
                      bottom: 3335259402728416190,
                      left: 8695925886282231874,
                      right: 6142759305976879424,
                      top: 4562155241883967082,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: true,
                      fontFamily: "tempore",
                      fontSize: 7835554462197091320,
                      foregroundColor: {
                        alpha: 52.200001,
                        blue: 86.099998,
                        green: 2.100000,
                        red: 34.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 41.099998,
                          blue: 34.099998,
                          green: 86.199997,
                          red: 61.200001,
                        },
                        themeColor: "ACCENT3",
                      },
                      italic: true,
                      link: {
                        uri: "eum",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    textRotation: {
                      angle: 8064412895740086542,
                      vertical: true,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "quibusdam",
                      type: "LOADING",
                    },
                    formulaValue: "aspernatur",
                    numberValue: 12.100000,
                    stringValue: "quibusdam",
                  },
                  formattedValue: "itaque",
                  hyperlink: "et",
                  note: "voluptates",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "eum",
                        },
                        groupLimit: {
                          applyOrder: 984261387682546831,
                          countLimit: 8905191645379933568,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_MONTH",
                          },
                          histogramRule: {
                            end: 10.200000,
                            interval: 29.100000,
                            start: 61.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "dignissimos",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "quibusdam",
                                  numberValue: 18.200001,
                                  stringValue: "nihil",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "dolorem",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "fugit",
                                    numberValue: 61.099998,
                                    stringValue: "ut",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "eum",
                                      type: "NUM",
                                    },
                                    formulaValue: "nisi",
                                    numberValue: 4.200000,
                                    stringValue: "debitis",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "nulla",
                                      type: "N_A",
                                    },
                                    formulaValue: "reiciendis",
                                    numberValue: 41.200001,
                                    stringValue: "laborum",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "autem",
                                    type: "VALUE",
                                  },
                                  formulaValue: "non",
                                  numberValue: 7.200000,
                                  stringValue: "itaque",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "explicabo",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "et",
                                    numberValue: 61.200001,
                                    stringValue: "natus",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "ipsum",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "itaque",
                                    numberValue: 92.199997,
                                    stringValue: "delectus",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "repellat",
                                      type: "NAME",
                                    },
                                    formulaValue: "neque",
                                    numberValue: 73.199997,
                                    stringValue: "qui",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "ut",
                                    type: "NAME",
                                  },
                                  formulaValue: "exercitationem",
                                  numberValue: 40.200001,
                                  stringValue: "et",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "debitis",
                                      type: "NUM",
                                    },
                                    formulaValue: "quos",
                                    numberValue: 62.099998,
                                    stringValue: "et",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "enim",
                                      type: "ERROR",
                                    },
                                    formulaValue: "vel",
                                    numberValue: 15.200000,
                                    stringValue: "aliquam",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "nesciunt",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 6156077135834832224,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "animi",
                                type: "N_A",
                              },
                              formulaValue: "eligendi",
                              numberValue: 79.199997,
                              stringValue: "commodi",
                            },
                          ],
                          valuesIndex: 7172349416883350561,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "officia",
                                type: "LOADING",
                              },
                              formulaValue: "modi",
                              numberValue: 77.199997,
                              stringValue: "distinctio",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "maxime",
                                type: "LOADING",
                              },
                              formulaValue: "quam",
                              numberValue: 98.099998,
                              stringValue: "vel",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "aut",
                        },
                        groupLimit: {
                          applyOrder: 5609853284431507260,
                          countLimit: 175767796850762469,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_MONTH",
                          },
                          histogramRule: {
                            end: 23.200001,
                            interval: 5.100000,
                            start: 5.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "dolore",
                                    type: "NAME",
                                  },
                                  formulaValue: "fugiat",
                                  numberValue: 44.099998,
                                  stringValue: "eligendi",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "iure",
                                      type: "ERROR",
                                    },
                                    formulaValue: "qui",
                                    numberValue: 35.200001,
                                    stringValue: "maiores",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "est",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "non",
                                  numberValue: 29.200001,
                                  stringValue: "et",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "aut",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "aspernatur",
                                    numberValue: 13.100000,
                                    stringValue: "ut",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "voluptatibus",
                                      type: "REF",
                                    },
                                    formulaValue: "facilis",
                                    numberValue: 73.199997,
                                    stringValue: "maiores",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "tenetur",
                                      type: "NAME",
                                    },
                                    formulaValue: "qui",
                                    numberValue: 55.099998,
                                    stringValue: "explicabo",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "vel",
                                    type: "NUM",
                                  },
                                  formulaValue: "aut",
                                  numberValue: 92.099998,
                                  stringValue: "magni",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "iure",
                                      type: "N_A",
                                    },
                                    formulaValue: "quidem",
                                    numberValue: 81.199997,
                                    stringValue: "dolor",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "odio",
                                      type: "NUM",
                                    },
                                    formulaValue: "sit",
                                    numberValue: 25.100000,
                                    stringValue: "consequuntur",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "dolorem",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "eveniet",
                                    numberValue: 90.199997,
                                    stringValue: "quaerat",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "ratione",
                        repeatHeadings: true,
                        showTotals: true,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 1458418984619659101,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "fugit",
                                type: "REF",
                              },
                              formulaValue: "aut",
                              numberValue: 23.100000,
                              stringValue: "aut",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quibusdam",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "et",
                              numberValue: 87.099998,
                              stringValue: "consequuntur",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "dolorum",
                                type: "LOADING",
                              },
                              formulaValue: "sapiente",
                              numberValue: 17.200001,
                              stringValue: "illum",
                            },
                          ],
                          valuesIndex: 2077375387773760416,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "quos",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "nihil",
                              numberValue: 24.100000,
                              stringValue: "occaecati",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "eos",
                                type: "LOADING",
                              },
                              formulaValue: "incidunt",
                              numberValue: 68.099998,
                              stringValue: "et",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "quas",
                        },
                        groupLimit: {
                          applyOrder: 5477313046186143529,
                          countLimit: 2560956465016938988,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            end: 55.099998,
                            interval: 24.200001,
                            start: 56.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "sed",
                                    type: "N_A",
                                  },
                                  formulaValue: "unde",
                                  numberValue: 56.200001,
                                  stringValue: "quia",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "dolorem",
                                      type: "NUM",
                                    },
                                    formulaValue: "iusto",
                                    numberValue: 0.200000,
                                    stringValue: "fugiat",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "qui",
                                    type: "ERROR",
                                  },
                                  formulaValue: "officia",
                                  numberValue: 41.099998,
                                  stringValue: "quia",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "repellat",
                                      type: "REF",
                                    },
                                    formulaValue: "voluptatem",
                                    numberValue: 78.099998,
                                    stringValue: "commodi",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "et",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 3771824397350188857,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "quasi",
                                type: "LOADING",
                              },
                              formulaValue: "placeat",
                              numberValue: 43.099998,
                              stringValue: "atque",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "eveniet",
                                type: "NAME",
                              },
                              formulaValue: "quo",
                              numberValue: 65.099998,
                              stringValue: "numquam",
                            },
                          ],
                          valuesIndex: 4596230420101131104,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "necessitatibus",
                                type: "REF",
                              },
                              formulaValue: "beatae",
                              numberValue: 80.199997,
                              stringValue: "veritatis",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "tenetur": {
                        condition: {
                          type: "TEXT_EQ",
                          values: [
                            {
                              relativeDate: "PAST_WEEK",
                              userEnteredValue: "voluptatem",
                            },
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "illo",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "ipsam",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "PERMISSION_DENIED",
                      errorMessage: "doloribus",
                      lastRefreshTime: "esse",
                      state: "NOT_STARTED",
                    },
                    dataSourceId: "eligendi",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 3846643903543992538,
                        dataSourceColumnReference: {
                          name: "ab",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_ON_OR_AFTER",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "deleniti",
                              },
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "soluta",
                              },
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "et",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "maxime",
                            "illum",
                            "et",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 8410088863226271486,
                        dataSourceColumnReference: {
                          name: "hic",
                        },
                        filterCriteria: {
                          condition: {
                            type: "CUSTOM_FORMULA",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "quae",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "nam",
                            "laboriosam",
                            "odio",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "molestias",
                        },
                        groupLimit: {
                          applyOrder: 5088097601509397635,
                          countLimit: 8617803025049453994,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_YEAR",
                          },
                          histogramRule: {
                            end: 94.199997,
                            interval: 41.099998,
                            start: 15.200000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "quisquam",
                                    type: "LOADING",
                                  },
                                  formulaValue: "quos",
                                  numberValue: 5.200000,
                                  stringValue: "soluta",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "iste",
                                      type: "VALUE",
                                    },
                                    formulaValue: "minima",
                                    numberValue: 63.099998,
                                    stringValue: "aperiam",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "fuga",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "et",
                                    numberValue: 53.200001,
                                    stringValue: "sint",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "omnis",
                                    type: "NUM",
                                  },
                                  formulaValue: "non",
                                  numberValue: 46.200001,
                                  stringValue: "commodi",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "voluptates",
                                      type: "NUM",
                                    },
                                    formulaValue: "qui",
                                    numberValue: 64.099998,
                                    stringValue: "autem",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "cum",
                                    type: "NAME",
                                  },
                                  formulaValue: "laborum",
                                  numberValue: 69.099998,
                                  stringValue: "eum",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "porro",
                                      type: "ERROR",
                                    },
                                    formulaValue: "fugit",
                                    numberValue: 84.199997,
                                    stringValue: "eligendi",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "omnis",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 3914752590011145468,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "cupiditate",
                                type: "REF",
                              },
                              formulaValue: "beatae",
                              numberValue: 64.099998,
                              stringValue: "perferendis",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "laborum",
                                type: "ERROR",
                              },
                              formulaValue: "soluta",
                              numberValue: 24.100000,
                              stringValue: "consequatur",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "fugiat",
                                type: "N_A",
                              },
                              formulaValue: "qui",
                              numberValue: 53.099998,
                              stringValue: "iste",
                            },
                          ],
                          valuesIndex: 855299544996592055,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "veniam",
                                type: "N_A",
                              },
                              formulaValue: "sit",
                              numberValue: 9.100000,
                              stringValue: "et",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "tenetur",
                        },
                        groupLimit: {
                          applyOrder: 984592483387923672,
                          countLimit: 1797861142141472382,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR",
                          },
                          histogramRule: {
                            end: 60.200001,
                            interval: 61.200001,
                            start: 86.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "est",
                                    type: "N_A",
                                  },
                                  formulaValue: "dolorem",
                                  numberValue: 40.200001,
                                  stringValue: "rerum",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "ratione",
                                      type: "NAME",
                                    },
                                    formulaValue: "iure",
                                    numberValue: 63.200001,
                                    stringValue: "eum",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "placeat",
                                    type: "REF",
                                  },
                                  formulaValue: "tempore",
                                  numberValue: 37.099998,
                                  stringValue: "consequatur",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "voluptatem",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "reiciendis",
                                    numberValue: 94.099998,
                                    stringValue: "dicta",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "reiciendis",
                                      type: "N_A",
                                    },
                                    formulaValue: "ipsa",
                                    numberValue: 58.099998,
                                    stringValue: "nisi",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "omnis",
                                    type: "LOADING",
                                  },
                                  formulaValue: "dolorum",
                                  numberValue: 67.199997,
                                  stringValue: "laudantium",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "temporibus",
                                      type: "ERROR",
                                    },
                                    formulaValue: "reiciendis",
                                    numberValue: 15.200000,
                                    stringValue: "quaerat",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "nostrum",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 2431766292018619844,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "et",
                                type: "REF",
                              },
                              formulaValue: "quam",
                              numberValue: 75.199997,
                              stringValue: "a",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "tempore",
                                type: "NUM",
                              },
                              formulaValue: "ut",
                              numberValue: 26.200001,
                              stringValue: "nulla",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "repellendus",
                                type: "N_A",
                              },
                              formulaValue: "error",
                              numberValue: 60.200001,
                              stringValue: "et",
                            },
                          ],
                          valuesIndex: 5121037579029954720,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "id",
                                type: "LOADING",
                              },
                              formulaValue: "vero",
                              numberValue: 57.200001,
                              stringValue: "consectetur",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 510703617190623381,
                      endRowIndex: 4358266485812495134,
                      sheetId: 690764650181246676,
                      startColumnIndex: 2374103718954400839,
                      startRowIndex: 6698176495489963317,
                    },
                    valueLayout: "VERTICAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "atque",
                        },
                        formula: "nostrum",
                        name: "totam",
                        sourceColumnOffset: 7579689120062878195,
                        summarizeFunction: "VAR",
                      },
                      {
                        calculatedDisplayType: "PERCENT_OF_GRAND_TOTAL",
                        dataSourceColumnReference: {
                          name: "voluptatum",
                        },
                        formula: "non",
                        name: "magni",
                        sourceColumnOffset: 4753906442332753730,
                        summarizeFunction: "SUM",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "ducimus",
                        fontSize: 9113313656483899065,
                        foregroundColor: {
                          alpha: 87.099998,
                          blue: 58.200001,
                          green: 8.200000,
                          red: 80.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 13.200000,
                            blue: 61.200001,
                            green: 82.199997,
                            red: 32.099998,
                          },
                          themeColor: "ACCENT2",
                        },
                        italic: true,
                        link: {
                          uri: "et",
                        },
                        strikethrough: false,
                        underline: false,
                      },
                      startIndex: 395252224775813328,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 8.200000,
                      blue: 51.099998,
                      green: 59.099998,
                      red: 3.200000,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 38.200001,
                        blue: 9.200000,
                        green: 5.200000,
                        red: 94.099998,
                      },
                      themeColor: "ACCENT3",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 25.100000,
                          blue: 25.200001,
                          green: 92.199997,
                          red: 12.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 55.099998,
                            blue: 85.199997,
                            green: 54.200001,
                            red: 63.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "NONE",
                        width: 3264447860820734313,
                      },
                      left: {
                        color: {
                          alpha: 16.200001,
                          blue: 91.199997,
                          green: 88.199997,
                          red: 58.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 49.099998,
                            blue: 92.099998,
                            green: 38.099998,
                            red: 1.100000,
                          },
                          themeColor: "LINK",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 764125032378144276,
                      },
                      right: {
                        color: {
                          alpha: 82.099998,
                          blue: 49.099998,
                          green: 85.199997,
                          red: 43.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 63.099998,
                            blue: 35.099998,
                            green: 76.199997,
                            red: 95.199997,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "DOTTED",
                        width: 7212643414095559769,
                      },
                      top: {
                        color: {
                          alpha: 56.099998,
                          blue: 0.200000,
                          green: 53.099998,
                          red: 55.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 47.099998,
                            blue: 5.200000,
                            green: 75.099998,
                            red: 42.200001,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "SOLID",
                        width: 1996597803280127353,
                      },
                    },
                    horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "nemo",
                      type: "TEXT",
                    },
                    padding: {
                      bottom: 7738486450964645459,
                      left: 7605543506231541129,
                      right: 7027470255028996348,
                      top: 1970315275883005822,
                    },
                    textDirection: "LEFT_TO_RIGHT",
                    textFormat: {
                      bold: true,
                      fontFamily: "laudantium",
                      fontSize: 6094791378696915265,
                      foregroundColor: {
                        alpha: 61.099998,
                        blue: 97.199997,
                        green: 29.100000,
                        red: 94.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 0.200000,
                          blue: 3.100000,
                          green: 58.099998,
                          red: 86.099998,
                        },
                        themeColor: "ACCENT1",
                      },
                      italic: true,
                      link: {
                        uri: "vitae",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    textRotation: {
                      angle: 1809982113931415429,
                      vertical: true,
                    },
                    verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                    wrapStrategy: "LEGACY_WRAP",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "expedita",
                      type: "NULL_VALUE",
                    },
                    formulaValue: "quis",
                    numberValue: 34.200001,
                    stringValue: "quis",
                  },
                },
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "OBJECT_SPEC_INVALID",
                      errorMessage: "totam",
                      lastRefreshTime: "rerum",
                      state: "DATA_EXECUTION_STATE_UNSPECIFIED",
                    },
                    dataSourceId: "porro",
                  },
                  dataSourceTable: {
                    columnSelectionType: "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED",
                    columns: [
                      {
                        name: "dolorum",
                      },
                      {
                        name: "eligendi",
                      },
                      {
                        name: "perspiciatis",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "DUPLICATE_COLUMN_NAMES",
                      errorMessage: "expedita",
                      lastRefreshTime: "incidunt",
                      state: "RUNNING",
                    },
                    dataSourceId: "fugit",
                    filterSpecs: [
                      {
                        columnIndex: 6551933396023677285,
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_EQ",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "non",
                              },
                            ],
                          },
                          hiddenValues: [
                            "dignissimos",
                          ],
                          visibleBackgroundColor: {
                            alpha: 50.099998,
                            blue: 18.200001,
                            green: 58.099998,
                            red: 47.200001,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 26.100000,
                              blue: 86.199997,
                              green: 97.099998,
                              red: 40.200001,
                            },
                            themeColor: "ACCENT4",
                          },
                          visibleForegroundColor: {
                            alpha: 59.200001,
                            blue: 67.099998,
                            green: 51.099998,
                            red: 12.100000,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 56.099998,
                              blue: 87.199997,
                              green: 82.199997,
                              red: 34.099998,
                            },
                            themeColor: "LINK",
                          },
                        },
                      },
                      {
                        columnIndex: 8460786827097921940,
                        dataSourceColumnReference: {
                          name: "molestiae",
                        },
                        filterCriteria: {
                          condition: {
                            type: "ONE_OF_LIST",
                            values: [
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "voluptatem",
                              },
                            ],
                          },
                          hiddenValues: [
                            "velit",
                            "numquam",
                            "delectus",
                          ],
                          visibleBackgroundColor: {
                            alpha: 29.100000,
                            blue: 74.199997,
                            green: 26.200001,
                            red: 83.199997,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 99.099998,
                              blue: 72.199997,
                              green: 58.099998,
                              red: 2.200000,
                            },
                            themeColor: "ACCENT3",
                          },
                          visibleForegroundColor: {
                            alpha: 30.200001,
                            blue: 30.100000,
                            green: 95.199997,
                            red: 9.200000,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 91.199997,
                              blue: 14.200000,
                              green: 79.199997,
                              red: 56.200001,
                            },
                            themeColor: "ACCENT5",
                          },
                        },
                      },
                    ],
                    rowLimit: 5420254566922797739,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 31.100000,
                          blue: 39.099998,
                          green: 3.200000,
                          red: 49.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 22.200001,
                            blue: 95.099998,
                            green: 83.199997,
                            red: 17.200001,
                          },
                          themeColor: "ACCENT1",
                        },
                        dataSourceColumnReference: {
                          name: "consequuntur",
                        },
                        dimensionIndex: 2007970941708636414,
                        foregroundColor: {
                          alpha: 36.099998,
                          blue: 68.199997,
                          green: 68.199997,
                          red: 98.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 11.200000,
                            blue: 59.200001,
                            green: 90.199997,
                            red: 28.200001,
                          },
                          themeColor: "LINK",
                        },
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                      },
                      {
                        backgroundColor: {
                          alpha: 24.200001,
                          blue: 11.200000,
                          green: 89.199997,
                          red: 82.199997,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 46.099998,
                            blue: 53.099998,
                            green: 56.099998,
                            red: 27.200001,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        dataSourceColumnReference: {
                          name: "eos",
                        },
                        dimensionIndex: 2976848411578868895,
                        foregroundColor: {
                          alpha: 83.099998,
                          blue: 66.199997,
                          green: 24.200001,
                          red: 97.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 6.200000,
                            blue: 78.199997,
                            green: 94.099998,
                            red: 98.099998,
                          },
                          themeColor: "ACCENT1",
                        },
                        sortOrder: "DESCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "NUMBER_LESS",
                      values: [
                        {
                          relativeDate: "PAST_WEEK",
                          userEnteredValue: "expedita",
                        },
                      ],
                    },
                    inputMessage: "minima",
                    showCustomUi: true,
                    strict: true,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 23.100000,
                      blue: 24.100000,
                      green: 92.099998,
                      red: 91.199997,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 84.199997,
                        blue: 71.199997,
                        green: 40.099998,
                        red: 85.199997,
                      },
                      themeColor: "ACCENT2",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 35.099998,
                          blue: 10.200000,
                          green: 87.199997,
                          red: 68.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 90.199997,
                            blue: 88.099998,
                            green: 24.200001,
                            red: 19.100000,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 4144235625271492325,
                      },
                      left: {
                        color: {
                          alpha: 41.099998,
                          blue: 53.099998,
                          green: 61.200001,
                          red: 36.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 59.200001,
                            blue: 47.200001,
                            green: 49.099998,
                            red: 19.100000,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "SOLID_THICK",
                        width: 7610337700720926000,
                      },
                      right: {
                        color: {
                          alpha: 57.099998,
                          blue: 45.200001,
                          green: 94.099998,
                          red: 57.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 4.100000,
                            blue: 18.200001,
                            green: 28.200001,
                            red: 88.099998,
                          },
                          themeColor: "TEXT",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 723465636021755142,
                      },
                      top: {
                        color: {
                          alpha: 33.099998,
                          blue: 77.199997,
                          green: 67.099998,
                          red: 70.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 13.200000,
                            blue: 17.100000,
                            green: 43.099998,
                            red: 59.099998,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "SOLID_MEDIUM",
                        width: 3557749154739224909,
                      },
                    },
                    horizontalAlignment: "LEFT",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "qui",
                      type: "PERCENT",
                    },
                    padding: {
                      bottom: 8630797002669459087,
                      left: 4575234066812620657,
                      right: 7770960447989902384,
                      top: 7903305275299614923,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: true,
                      fontFamily: "doloribus",
                      fontSize: 6861055600802033081,
                      foregroundColor: {
                        alpha: 73.099998,
                        blue: 35.200001,
                        green: 46.200001,
                        red: 20.200001,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 8.100000,
                          blue: 68.099998,
                          green: 58.099998,
                          red: 99.099998,
                        },
                        themeColor: "LINK",
                      },
                      italic: false,
                      link: {
                        uri: "in",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    textRotation: {
                      angle: 1771466324944821432,
                      vertical: true,
                    },
                    verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                    wrapStrategy: "CLIP",
                  },
                  effectiveValue: {
                    boolValue: false,
                    errorValue: {
                      message: "dolor",
                      type: "REF",
                    },
                    formulaValue: "nesciunt",
                    numberValue: 3.200000,
                    stringValue: "accusantium",
                  },
                  formattedValue: "esse",
                  hyperlink: "placeat",
                  note: "error",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        groupLimit: {
                          applyOrder: 5878518337930831496,
                          countLimit: 6114355976844426671,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_YEAR",
                          },
                          histogramRule: {
                            end: 12.200000,
                            interval: 4.200000,
                            start: 5.200000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "sint",
                                    type: "ERROR",
                                  },
                                  formulaValue: "unde",
                                  numberValue: 72.099998,
                                  stringValue: "a",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "enim",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "sit",
                                    numberValue: 72.099998,
                                    stringValue: "eum",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "autem",
                                      type: "VALUE",
                                    },
                                    formulaValue: "molestiae",
                                    numberValue: 79.199997,
                                    stringValue: "voluptas",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "ipsam",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "ut",
                                  numberValue: 57.200001,
                                  stringValue: "dolores",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "corporis",
                                      type: "VALUE",
                                    },
                                    formulaValue: "ut",
                                    numberValue: 90.199997,
                                    stringValue: "id",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "fugit",
                                    type: "REF",
                                  },
                                  formulaValue: "culpa",
                                  numberValue: 11.100000,
                                  stringValue: "illo",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "expedita",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "et",
                                    numberValue: 64.099998,
                                    stringValue: "dolore",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "non",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 1561805638517576643,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "et",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "voluptas",
                              numberValue: 89.099998,
                              stringValue: "totam",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "aut",
                                type: "NUM",
                              },
                              formulaValue: "quis",
                              numberValue: 29.100000,
                              stringValue: "eum",
                            },
                          ],
                          valuesIndex: 1457145881942002899,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "et",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "doloribus",
                              numberValue: 74.199997,
                              stringValue: "hic",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "earum",
                        },
                        groupLimit: {
                          applyOrder: 8175607278545923187,
                          countLimit: 4697754157778067917,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DATE_TIME_RULE_TYPE_UNSPECIFIED",
                          },
                          histogramRule: {
                            end: 76.199997,
                            interval: 38.200001,
                            start: 80.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "aut",
                                    type: "LOADING",
                                  },
                                  formulaValue: "iusto",
                                  numberValue: 95.099998,
                                  stringValue: "aut",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "nam",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "cumque",
                                    numberValue: 4.200000,
                                    stringValue: "non",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "omnis",
                                      type: "VALUE",
                                    },
                                    formulaValue: "est",
                                    numberValue: 62.200001,
                                    stringValue: "minima",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "nam",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "ut",
                                    numberValue: 73.099998,
                                    stringValue: "quod",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "placeat",
                                    type: "VALUE",
                                  },
                                  formulaValue: "natus",
                                  numberValue: 82.099998,
                                  stringValue: "reiciendis",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "sit",
                                      type: "REF",
                                    },
                                    formulaValue: "aut",
                                    numberValue: 68.199997,
                                    stringValue: "ut",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "ab",
                                    type: "LOADING",
                                  },
                                  formulaValue: "dignissimos",
                                  numberValue: 92.199997,
                                  stringValue: "enim",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "provident",
                                      type: "ERROR",
                                    },
                                    formulaValue: "quia",
                                    numberValue: 46.099998,
                                    stringValue: "laboriosam",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "repellendus",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "molestias",
                                    numberValue: 60.099998,
                                    stringValue: "et",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "aut",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "neque",
                                    numberValue: 39.099998,
                                    stringValue: "quis",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "tenetur",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 8996494684539806031,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "illo",
                                type: "N_A",
                              },
                              formulaValue: "qui",
                              numberValue: 3.100000,
                              stringValue: "nesciunt",
                            },
                          ],
                          valuesIndex: 2803847772510186081,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "quae",
                                type: "REF",
                              },
                              formulaValue: "sequi",
                              numberValue: 30.100000,
                              stringValue: "ipsa",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "eius",
                                type: "NAME",
                              },
                              formulaValue: "cum",
                              numberValue: 64.099998,
                              stringValue: "repudiandae",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "et": {
                        condition: {
                          type: "CUSTOM_FORMULA",
                          values: [
                            {
                              relativeDate: "PAST_YEAR",
                              userEnteredValue: "qui",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "quod",
                          "quia",
                          "eaque",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "PARAMETER_INVALID",
                      errorMessage: "delectus",
                      lastRefreshTime: "reprehenderit",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "consequatur",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 1198537554770211723,
                        dataSourceColumnReference: {
                          name: "nesciunt",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_NOT_EQ",
                            values: [
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "provident",
                              },
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "expedita",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "cupiditate",
                            "nihil",
                            "earum",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 6355692596009026553,
                        dataSourceColumnReference: {
                          name: "deserunt",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_NOT_EQ",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "enim",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "minus",
                            "laboriosam",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 1403140220110758104,
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_EQ",
                            values: [
                              {
                                relativeDate: "TOMORROW",
                                userEnteredValue: "quam",
                              },
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "eveniet",
                              },
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "nulla",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "sed",
                            "velit",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        groupLimit: {
                          applyOrder: 5621304453235028641,
                          countLimit: 7324624071332312994,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH_DAY",
                          },
                          histogramRule: {
                            end: 86.099998,
                            interval: 52.099998,
                            start: 63.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "omnis",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "dolorum",
                                  numberValue: 89.099998,
                                  stringValue: "qui",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "voluptate",
                                      type: "VALUE",
                                    },
                                    formulaValue: "incidunt",
                                    numberValue: 80.099998,
                                    stringValue: "quis",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "perspiciatis",
                                      type: "N_A",
                                    },
                                    formulaValue: "numquam",
                                    numberValue: 67.199997,
                                    stringValue: "debitis",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "voluptates",
                                    type: "REF",
                                  },
                                  formulaValue: "inventore",
                                  numberValue: 34.099998,
                                  stringValue: "et",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "veritatis",
                                      type: "REF",
                                    },
                                    formulaValue: "maxime",
                                    numberValue: 60.099998,
                                    stringValue: "recusandae",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "quam",
                        repeatHeadings: true,
                        showTotals: true,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 5697078867695889322,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "dolorum",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "possimus",
                              numberValue: 47.099998,
                              stringValue: "et",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "sunt",
                                type: "VALUE",
                              },
                              formulaValue: "qui",
                              numberValue: 6.200000,
                              stringValue: "molestias",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "eaque",
                                type: "LOADING",
                              },
                              formulaValue: "recusandae",
                              numberValue: 55.200001,
                              stringValue: "iusto",
                            },
                          ],
                          valuesIndex: 6517153020795935714,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "nulla",
                                type: "ERROR",
                              },
                              formulaValue: "et",
                              numberValue: 61.200001,
                              stringValue: "autem",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "inventore",
                                type: "VALUE",
                              },
                              formulaValue: "dolor",
                              numberValue: 55.099998,
                              stringValue: "qui",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "molestiae",
                                type: "NAME",
                              },
                              formulaValue: "sit",
                              numberValue: 99.099998,
                              stringValue: "voluptas",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        groupLimit: {
                          applyOrder: 9164710896756806585,
                          countLimit: 7384353246005303806,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "MINUTE",
                          },
                          histogramRule: {
                            end: 6.100000,
                            interval: 24.100000,
                            start: 47.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "nihil",
                                    type: "NAME",
                                  },
                                  formulaValue: "natus",
                                  numberValue: 29.200001,
                                  stringValue: "error",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "repudiandae",
                                      type: "NAME",
                                    },
                                    formulaValue: "rerum",
                                    numberValue: 21.100000,
                                    stringValue: "ipsa",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "tempore",
                                    type: "REF",
                                  },
                                  formulaValue: "magni",
                                  numberValue: 85.199997,
                                  stringValue: "dolores",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "molestiae",
                                      type: "NUM",
                                    },
                                    formulaValue: "blanditiis",
                                    numberValue: 50.099998,
                                    stringValue: "cupiditate",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "aut",
                                      type: "N_A",
                                    },
                                    formulaValue: "doloremque",
                                    numberValue: 68.199997,
                                    stringValue: "earum",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "similique",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "ab",
                                    numberValue: 66.099998,
                                    stringValue: "doloremque",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "molestias",
                                    type: "ERROR",
                                  },
                                  formulaValue: "ut",
                                  numberValue: 49.200001,
                                  stringValue: "autem",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "omnis",
                                      type: "N_A",
                                    },
                                    formulaValue: "necessitatibus",
                                    numberValue: 72.099998,
                                    stringValue: "eum",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "aut",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 4408306674490992446,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "et",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "et",
                              numberValue: 67.099998,
                              stringValue: "aut",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "deleniti",
                                type: "NAME",
                              },
                              formulaValue: "et",
                              numberValue: 56.200001,
                              stringValue: "minus",
                            },
                          ],
                          valuesIndex: 599727904817172264,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "aspernatur",
                                type: "LOADING",
                              },
                              formulaValue: "sit",
                              numberValue: 15.200000,
                              stringValue: "minus",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "molestias",
                                type: "REF",
                              },
                              formulaValue: "autem",
                              numberValue: 39.200001,
                              stringValue: "sed",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "temporibus",
                                type: "NAME",
                              },
                              formulaValue: "eum",
                              numberValue: 15.200000,
                              stringValue: "nihil",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "provident",
                        },
                        groupLimit: {
                          applyOrder: 4886578904740143578,
                          countLimit: 8455116294805939668,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "QUARTER",
                          },
                          histogramRule: {
                            end: 67.099998,
                            interval: 8.200000,
                            start: 69.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "a",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "nulla",
                                  numberValue: 65.199997,
                                  stringValue: "ullam",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "amet",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "eos",
                                    numberValue: 6.200000,
                                    stringValue: "dolor",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "et",
                        repeatHeadings: true,
                        showTotals: true,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 378163288363358934,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "aut",
                                type: "LOADING",
                              },
                              formulaValue: "nihil",
                              numberValue: 14.200000,
                              stringValue: "deserunt",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "porro",
                                type: "NUM",
                              },
                              formulaValue: "et",
                              numberValue: 55.099998,
                              stringValue: "et",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "at",
                                type: "REF",
                              },
                              formulaValue: "sed",
                              numberValue: 53.099998,
                              stringValue: "porro",
                            },
                          ],
                          valuesIndex: 4268378714093594847,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "alias",
                                type: "NUM",
                              },
                              formulaValue: "qui",
                              numberValue: 72.099998,
                              stringValue: "beatae",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "eveniet",
                                type: "VALUE",
                              },
                              formulaValue: "fugit",
                              numberValue: 3.200000,
                              stringValue: "inventore",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 338923343296108362,
                      endRowIndex: 2702354054819486594,
                      sheetId: 3184345019261316977,
                      startColumnIndex: 1200692764733342676,
                      startRowIndex: 8632913105661944249,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "et",
                        },
                        formula: "nihil",
                        name: "est",
                        sourceColumnOffset: 3208503613350752310,
                        summarizeFunction: "MAX",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: false,
                        fontFamily: "aliquid",
                        fontSize: 3829005875477984015,
                        foregroundColor: {
                          alpha: 94.099998,
                          blue: 99.199997,
                          green: 83.099998,
                          red: 92.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 66.199997,
                            blue: 58.099998,
                            green: 98.199997,
                            red: 33.200001,
                          },
                          themeColor: "ACCENT6",
                        },
                        italic: true,
                        link: {
                          uri: "velit",
                        },
                        strikethrough: false,
                        underline: false,
                      },
                      startIndex: 5041939852543566906,
                    },
                    {
                      format: {
                        bold: false,
                        fontFamily: "ut",
                        fontSize: 3074698441087848520,
                        foregroundColor: {
                          alpha: 51.099998,
                          blue: 70.199997,
                          green: 73.199997,
                          red: 27.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 60.200001,
                            blue: 66.199997,
                            green: 60.099998,
                            red: 49.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        italic: true,
                        link: {
                          uri: "voluptatem",
                        },
                        strikethrough: false,
                        underline: true,
                      },
                      startIndex: 2904612976892370465,
                    },
                    {
                      format: {
                        bold: false,
                        fontFamily: "nesciunt",
                        fontSize: 7863675673760080096,
                        foregroundColor: {
                          alpha: 67.099998,
                          blue: 91.099998,
                          green: 57.200001,
                          red: 95.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 28.200001,
                            blue: 59.099998,
                            green: 90.199997,
                            red: 93.099998,
                          },
                          themeColor: "ACCENT3",
                        },
                        italic: true,
                        link: {
                          uri: "quia",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      startIndex: 4145799156619484582,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 5.100000,
                      blue: 20.200001,
                      green: 39.200001,
                      red: 62.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 69.099998,
                        blue: 92.199997,
                        green: 19.100000,
                        red: 23.100000,
                      },
                      themeColor: "ACCENT6",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 40.200001,
                          blue: 75.099998,
                          green: 98.199997,
                          red: 97.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 28.100000,
                            blue: 50.200001,
                            green: 42.099998,
                            red: 2.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 5702142388753908395,
                      },
                      left: {
                        color: {
                          alpha: 35.099998,
                          blue: 61.099998,
                          green: 49.200001,
                          red: 80.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 30.200001,
                            blue: 21.100000,
                            green: 60.099998,
                            red: 28.200001,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "DOUBLE",
                        width: 7728800982456185598,
                      },
                      right: {
                        color: {
                          alpha: 53.200001,
                          blue: 45.200001,
                          green: 30.200001,
                          red: 29.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 78.199997,
                            blue: 55.200001,
                            green: 59.200001,
                            red: 48.099998,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "DOTTED",
                        width: 3325835988643333038,
                      },
                      top: {
                        color: {
                          alpha: 65.099998,
                          blue: 53.200001,
                          green: 44.099998,
                          red: 39.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 16.100000,
                            blue: 83.199997,
                            green: 91.099998,
                            red: 45.200001,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "SOLID_THICK",
                        width: 2481505831201907315,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                    numberFormat: {
                      pattern: "consectetur",
                      type: "PERCENT",
                    },
                    padding: {
                      bottom: 7142273068634465703,
                      left: 8153212761489179546,
                      right: 8965717609530262673,
                      top: 6270822144351441707,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "hic",
                      fontSize: 8757786344574902393,
                      foregroundColor: {
                        alpha: 84.199997,
                        blue: 12.200000,
                        green: 73.099998,
                        red: 59.200001,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 57.200001,
                          blue: 67.199997,
                          green: 29.200001,
                          red: 0.200000,
                        },
                        themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                      },
                      italic: false,
                      link: {
                        uri: "atque",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    textRotation: {
                      angle: 7014682251682902831,
                      vertical: true,
                    },
                    verticalAlignment: "BOTTOM",
                    wrapStrategy: "OVERFLOW_CELL",
                  },
                  userEnteredValue: {
                    boolValue: false,
                    errorValue: {
                      message: "impedit",
                      type: "NAME",
                    },
                    formulaValue: "est",
                    numberValue: 73.199997,
                    stringValue: "enim",
                  },
                },
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "OBJECT_NOT_FOUND",
                      errorMessage: "culpa",
                      lastRefreshTime: "voluptatum",
                      state: "RUNNING",
                    },
                    dataSourceId: "velit",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SELECTED",
                    columns: [
                      {
                        name: "quisquam",
                      },
                      {
                        name: "explicabo",
                      },
                      {
                        name: "vel",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "TOO_MANY_ROWS",
                      errorMessage: "voluptatem",
                      lastRefreshTime: "id",
                      state: "SUCCEEDED",
                    },
                    dataSourceId: "incidunt",
                    filterSpecs: [
                      {
                        columnIndex: 2508340864085600321,
                        dataSourceColumnReference: {
                          name: "modi",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_BETWEEN",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "voluptas",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "quia",
                              },
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "cum",
                              },
                            ],
                          },
                          hiddenValues: [
                            "et",
                            "nam",
                            "nostrum",
                          ],
                          visibleBackgroundColor: {
                            alpha: 40.099998,
                            blue: 76.099998,
                            green: 27.200001,
                            red: 26.200001,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 46.099998,
                              blue: 88.099998,
                              green: 68.099998,
                              red: 17.100000,
                            },
                            themeColor: "TEXT",
                          },
                          visibleForegroundColor: {
                            alpha: 98.199997,
                            blue: 10.200000,
                            green: 6.200000,
                            red: 59.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 68.099998,
                              blue: 26.100000,
                              green: 89.099998,
                              red: 59.099998,
                            },
                            themeColor: "TEXT",
                          },
                        },
                      },
                      {
                        columnIndex: 1206825430834981119,
                        dataSourceColumnReference: {
                          name: "est",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_NOT_CONTAINS",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "suscipit",
                              },
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "expedita",
                              },
                            ],
                          },
                          hiddenValues: [
                            "vel",
                          ],
                          visibleBackgroundColor: {
                            alpha: 77.199997,
                            blue: 95.199997,
                            green: 73.099998,
                            red: 47.200001,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 47.099998,
                              blue: 15.200000,
                              green: 41.200001,
                              red: 1.200000,
                            },
                            themeColor: "LINK",
                          },
                          visibleForegroundColor: {
                            alpha: 40.200001,
                            blue: 15.200000,
                            green: 16.100000,
                            red: 46.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 71.199997,
                              blue: 76.099998,
                              green: 43.200001,
                              red: 57.200001,
                            },
                            themeColor: "LINK",
                          },
                        },
                      },
                    ],
                    rowLimit: 6424508088240988250,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 72.099998,
                          blue: 8.100000,
                          green: 63.200001,
                          red: 71.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 62.200001,
                            blue: 50.200001,
                            green: 78.099998,
                            red: 86.199997,
                          },
                          themeColor: "ACCENT1",
                        },
                        dataSourceColumnReference: {
                          name: "in",
                        },
                        dimensionIndex: 4043482447139949182,
                        foregroundColor: {
                          alpha: 99.099998,
                          blue: 16.200001,
                          green: 96.199997,
                          red: 3.200000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 80.199997,
                            blue: 1.200000,
                            green: 7.200000,
                            red: 6.200000,
                          },
                          themeColor: "ACCENT1",
                        },
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                      },
                      {
                        backgroundColor: {
                          alpha: 44.099998,
                          blue: 27.200001,
                          green: 40.099998,
                          red: 93.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 57.099998,
                            blue: 2.100000,
                            green: 7.200000,
                            red: 15.200000,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        dataSourceColumnReference: {
                          name: "deserunt",
                        },
                        dimensionIndex: 7116013907835153486,
                        foregroundColor: {
                          alpha: 68.199997,
                          blue: 71.199997,
                          green: 72.199997,
                          red: 80.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 4.200000,
                            blue: 95.199997,
                            green: 66.099998,
                            red: 17.200001,
                          },
                          themeColor: "ACCENT6",
                        },
                        sortOrder: "ASCENDING",
                      },
                      {
                        backgroundColor: {
                          alpha: 23.200001,
                          blue: 17.200001,
                          green: 85.099998,
                          red: 49.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 30.100000,
                            blue: 76.199997,
                            green: 77.199997,
                            red: 41.200001,
                          },
                          themeColor: "ACCENT5",
                        },
                        dataSourceColumnReference: {
                          name: "est",
                        },
                        dimensionIndex: 4230826334519582693,
                        foregroundColor: {
                          alpha: 98.199997,
                          blue: 4.200000,
                          green: 39.099998,
                          red: 63.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 75.099998,
                            blue: 23.200001,
                            green: 61.200001,
                            red: 84.199997,
                          },
                          themeColor: "ACCENT5",
                        },
                        sortOrder: "ASCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "DATE_BEFORE",
                      values: [
                        {
                          relativeDate: "PAST_WEEK",
                          userEnteredValue: "consequatur",
                        },
                        {
                          relativeDate: "PAST_WEEK",
                          userEnteredValue: "iste",
                        },
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "quis",
                        },
                      ],
                    },
                    inputMessage: "sint",
                    showCustomUi: true,
                    strict: false,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 17.100000,
                      blue: 37.200001,
                      green: 36.099998,
                      red: 1.200000,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 64.099998,
                        blue: 96.099998,
                        green: 54.200001,
                        red: 8.100000,
                      },
                      themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 23.100000,
                          blue: 18.100000,
                          green: 78.199997,
                          red: 49.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 39.200001,
                            blue: 13.100000,
                            green: 35.099998,
                            red: 88.199997,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 134522771849317457,
                      },
                      left: {
                        color: {
                          alpha: 87.099998,
                          blue: 17.100000,
                          green: 44.099998,
                          red: 15.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 55.200001,
                            blue: 52.200001,
                            green: 81.199997,
                            red: 48.099998,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "SOLID_MEDIUM",
                        width: 3340856302076988331,
                      },
                      right: {
                        color: {
                          alpha: 3.100000,
                          blue: 97.199997,
                          green: 9.200000,
                          red: 78.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 66.199997,
                            blue: 50.099998,
                            green: 73.099998,
                            red: 49.099998,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "STYLE_UNSPECIFIED",
                        width: 7894602206375117279,
                      },
                      top: {
                        color: {
                          alpha: 82.099998,
                          blue: 43.200001,
                          green: 9.100000,
                          red: 95.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 5.100000,
                            blue: 36.200001,
                            green: 65.199997,
                            red: 27.100000,
                          },
                          themeColor: "LINK",
                        },
                        style: "DOTTED",
                        width: 4659980967430605941,
                      },
                    },
                    horizontalAlignment: "RIGHT",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "qui",
                      type: "SCIENTIFIC",
                    },
                    padding: {
                      bottom: 913565360018047709,
                      left: 2875610079137025001,
                      right: 4939982648820588421,
                      top: 5452275853403225030,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "aspernatur",
                      fontSize: 3112409960651260165,
                      foregroundColor: {
                        alpha: 66.199997,
                        blue: 96.199997,
                        green: 58.200001,
                        red: 88.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 54.200001,
                          blue: 33.200001,
                          green: 25.200001,
                          red: 23.100000,
                        },
                        themeColor: "BACKGROUND",
                      },
                      italic: true,
                      link: {
                        uri: "temporibus",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    textRotation: {
                      angle: 8543841738249786898,
                      vertical: false,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "LEGACY_WRAP",
                  },
                  effectiveValue: {
                    boolValue: true,
                    errorValue: {
                      message: "et",
                      type: "NULL_VALUE",
                    },
                    formulaValue: "expedita",
                    numberValue: 48.200001,
                    stringValue: "ipsam",
                  },
                  formattedValue: "voluptatem",
                  hyperlink: "voluptatem",
                  note: "sunt",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "explicabo",
                        },
                        groupLimit: {
                          applyOrder: 6702068008377072039,
                          countLimit: 2503723635583377076,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR",
                          },
                          histogramRule: {
                            end: 55.099998,
                            interval: 2.100000,
                            start: 93.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "et",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "dolor",
                                  numberValue: 62.099998,
                                  stringValue: "velit",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "minus",
                                      type: "VALUE",
                                    },
                                    formulaValue: "quas",
                                    numberValue: 0.200000,
                                    stringValue: "qui",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quos",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "cupiditate",
                                    numberValue: 24.100000,
                                    stringValue: "enim",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "suscipit",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "veritatis",
                                    numberValue: 31.100000,
                                    stringValue: "esse",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "omnis",
                                    type: "NAME",
                                  },
                                  formulaValue: "ut",
                                  numberValue: 62.200001,
                                  stringValue: "dolorum",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "accusamus",
                                      type: "LOADING",
                                    },
                                    formulaValue: "sed",
                                    numberValue: 91.199997,
                                    stringValue: "est",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "et",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 2294525758647903226,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "nihil",
                                type: "N_A",
                              },
                              formulaValue: "eius",
                              numberValue: 14.100000,
                              stringValue: "ipsa",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "et",
                                type: "ERROR",
                              },
                              formulaValue: "explicabo",
                              numberValue: 35.099998,
                              stringValue: "qui",
                            },
                          ],
                          valuesIndex: 8310047057815037713,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "reprehenderit",
                                type: "REF",
                              },
                              formulaValue: "totam",
                              numberValue: 24.100000,
                              stringValue: "distinctio",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "est",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "deleniti",
                              numberValue: 95.199997,
                              stringValue: "repellat",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "consequuntur": {
                        condition: {
                          type: "NUMBER_BETWEEN",
                          values: [
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "natus",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "ut",
                          "voluptatum",
                          "omnis",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "PARAMETER_INVALID",
                      errorMessage: "non",
                      lastRefreshTime: "laudantium",
                      state: "FAILED",
                    },
                    dataSourceId: "deserunt",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 7524180099821074257,
                        dataSourceColumnReference: {
                          name: "iusto",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_NOT_EQ",
                            values: [
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "aliquam",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "in",
                            "dolorum",
                          ],
                        },
                      },
                      {
                        columnOffsetIndex: 624605133247896001,
                        dataSourceColumnReference: {
                          name: "velit",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_BEFORE",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "sequi",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "nemo",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "sed",
                        },
                        groupLimit: {
                          applyOrder: 6805808163930592128,
                          countLimit: 3389892926485437723,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR",
                          },
                          histogramRule: {
                            end: 73.099998,
                            interval: 61.200001,
                            start: 1.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "eligendi",
                                    type: "VALUE",
                                  },
                                  formulaValue: "praesentium",
                                  numberValue: 76.199997,
                                  stringValue: "quam",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "molestias",
                                      type: "NUM",
                                    },
                                    formulaValue: "quo",
                                    numberValue: 96.099998,
                                    stringValue: "excepturi",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "repellendus",
                                    type: "ERROR",
                                  },
                                  formulaValue: "non",
                                  numberValue: 24.100000,
                                  stringValue: "nostrum",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "dolorem",
                                      type: "LOADING",
                                    },
                                    formulaValue: "veritatis",
                                    numberValue: 59.200001,
                                    stringValue: "ut",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "illo",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 1485236524691857182,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "ut",
                                type: "NAME",
                              },
                              formulaValue: "voluptates",
                              numberValue: 58.099998,
                              stringValue: "ea",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "quia",
                                type: "NAME",
                              },
                              formulaValue: "ab",
                              numberValue: 49.200001,
                              stringValue: "aliquam",
                            },
                          ],
                          valuesIndex: 5018039696645601156,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "aut",
                                type: "NUM",
                              },
                              formulaValue: "est",
                              numberValue: 87.199997,
                              stringValue: "minima",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "aut",
                                type: "N_A",
                              },
                              formulaValue: "alias",
                              numberValue: 56.200001,
                              stringValue: "vero",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 5777576492142630895,
                      endRowIndex: 8140825607913017269,
                      sheetId: 3545030467178661384,
                      startColumnIndex: 6523458162847285993,
                      startRowIndex: 2486357255991427364,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_ROW_TOTAL",
                        dataSourceColumnReference: {
                          name: "cumque",
                        },
                        formula: "suscipit",
                        name: "aut",
                        sourceColumnOffset: 3588970806830014174,
                        summarizeFunction: "SUM",
                      },
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "error",
                        },
                        formula: "nihil",
                        name: "aut",
                        sourceColumnOffset: 8225759598391573048,
                        summarizeFunction: "MIN",
                      },
                      {
                        calculatedDisplayType: "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
                        dataSourceColumnReference: {
                          name: "voluptatibus",
                        },
                        formula: "voluptatibus",
                        name: "fuga",
                        sourceColumnOffset: 4360573428538110050,
                        summarizeFunction: "MAX",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "minus",
                        fontSize: 3285879221755691185,
                        foregroundColor: {
                          alpha: 45.200001,
                          blue: 47.099998,
                          green: 20.200001,
                          red: 44.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 25.200001,
                            blue: 38.099998,
                            green: 85.099998,
                            red: 72.099998,
                          },
                          themeColor: "BACKGROUND",
                        },
                        italic: false,
                        link: {
                          uri: "sit",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      startIndex: 4083296323877015090,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 59.099998,
                      blue: 84.199997,
                      green: 92.199997,
                      red: 77.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 1.200000,
                        blue: 97.099998,
                        green: 51.200001,
                        red: 96.199997,
                      },
                      themeColor: "LINK",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 83.099998,
                          blue: 99.099998,
                          green: 92.099998,
                          red: 35.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 81.099998,
                            blue: 28.200001,
                            green: 91.099998,
                            red: 19.200001,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "SOLID_MEDIUM",
                        width: 7260477559778100875,
                      },
                      left: {
                        color: {
                          alpha: 74.199997,
                          blue: 53.099998,
                          green: 89.099998,
                          red: 68.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 95.099998,
                            blue: 67.199997,
                            green: 91.199997,
                            red: 26.100000,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        style: "SOLID_MEDIUM",
                        width: 422456615167460705,
                      },
                      right: {
                        color: {
                          alpha: 18.100000,
                          blue: 10.100000,
                          green: 94.099998,
                          red: 4.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 35.099998,
                            blue: 83.099998,
                            green: 58.200001,
                            red: 15.200000,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "SOLID",
                        width: 2422670882417498475,
                      },
                      top: {
                        color: {
                          alpha: 58.099998,
                          blue: 18.100000,
                          green: 96.199997,
                          red: 63.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 22.100000,
                            blue: 93.099998,
                            green: 63.200001,
                            red: 21.100000,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "DOUBLE",
                        width: 2210984501220144000,
                      },
                    },
                    horizontalAlignment: "RIGHT",
                    hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                    numberFormat: {
                      pattern: "praesentium",
                      type: "NUMBER",
                    },
                    padding: {
                      bottom: 1161920344027030410,
                      left: 6689577991799419006,
                      right: 3711652375595782544,
                      top: 653218362360961982,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: true,
                      fontFamily: "expedita",
                      fontSize: 1005779436422341945,
                      foregroundColor: {
                        alpha: 17.200001,
                        blue: 46.200001,
                        green: 18.200001,
                        red: 8.100000,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 89.199997,
                          blue: 55.099998,
                          green: 21.100000,
                          red: 17.100000,
                        },
                        themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                      },
                      italic: false,
                      link: {
                        uri: "quae",
                      },
                      strikethrough: false,
                      underline: false,
                    },
                    textRotation: {
                      angle: 3292379784067907286,
                      vertical: false,
                    },
                    verticalAlignment: "BOTTOM",
                    wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "enim",
                      type: "DIVIDE_BY_ZERO",
                    },
                    formulaValue: "velit",
                    numberValue: 75.199997,
                    stringValue: "qui",
                  },
                },
              ],
            },
          ],
          sheetId: 5114093895018605735,
        },
        appendDimension: {
          dimension: "ROWS",
          length: 863935241575879301,
          sheetId: 5420677726390554285,
        },
        autoFill: {
          range: {
            endColumnIndex: 3308942180802882650,
            endRowIndex: 4244081767658925957,
            sheetId: 8495940278086538470,
            startColumnIndex: 5095753295791804624,
            startRowIndex: 8582053376755072437,
          },
          sourceAndDestination: {
            dimension: "DIMENSION_UNSPECIFIED",
            fillLength: 900223474178616794,
            source: {
              endColumnIndex: 608975249725857720,
              endRowIndex: 1191580483918349899,
              sheetId: 5665324317828261293,
              startColumnIndex: 2313546106724600732,
              startRowIndex: 725514777395080963,
            },
          },
          useAlternateSeries: false,
        },
        autoResizeDimensions: {
          dataSourceSheetDimensions: {
            columnReferences: [
              {
                name: "quo",
              },
            ],
            sheetId: 1843612159091584115,
          },
          dimensions: {
            dimension: "COLUMNS",
            endIndex: 4524110895048633207,
            sheetId: 5361863497231530872,
            startIndex: 4744283891887060203,
          },
        },
        clearBasicFilter: {
          sheetId: 3207839663122636279,
        },
        copyPaste: {
          destination: {
            endColumnIndex: 1407916894935389933,
            endRowIndex: 2978433450684829025,
            sheetId: 1522975984440664356,
            startColumnIndex: 8319905918959009832,
            startRowIndex: 9013233368069308929,
          },
          pasteOrientation: "TRANSPOSE",
          pasteType: "PASTE_NORMAL",
          source: {
            endColumnIndex: 8037122395761996825,
            endRowIndex: 2311335476223330829,
            sheetId: 2952494846045926911,
            startColumnIndex: 6324628143040515248,
            startRowIndex: 8667829966841834184,
          },
        },
        createDeveloperMetadata: {
          developerMetadata: {
            location: {
              dimensionRange: {
                dimension: "ROWS",
                endIndex: 4342247009960567118,
                sheetId: 4372948142479293612,
                startIndex: 6174979661203694496,
              },
              locationType: "SHEET",
              sheetId: 8052345881401876999,
              spreadsheet: true,
            },
            metadataId: 3985843461405629865,
            metadataKey: "sed",
            metadataValue: "doloribus",
            visibility: "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
          },
        },
        cutPaste: {
          destination: {
            columnIndex: 7143928249062574172,
            rowIndex: 2988279951324204680,
            sheetId: 8352020268182568832,
          },
          pasteType: "PASTE_DATA_VALIDATION",
          source: {
            endColumnIndex: 8945431090315761543,
            endRowIndex: 669010050068712192,
            sheetId: 1033249524748332373,
            startColumnIndex: 8690471288310869507,
            startRowIndex: 5295325610314593906,
          },
        },
        deleteBanding: {
          bandedRangeId: 1827865821935895976,
        },
        deleteConditionalFormatRule: {
          index: 5212573700419373874,
          sheetId: 6571515907987281888,
        },
        deleteDataSource: {
          dataSourceId: "distinctio",
        },
        deleteDeveloperMetadata: {
          dataFilter: {
            a1Range: "consequatur",
            developerMetadataLookup: {
              locationMatchingStrategy: "INTERSECTING_LOCATION",
              locationType: "SHEET",
              metadataId: 4712255262970164949,
              metadataKey: "omnis",
              metadataLocation: {
                dimensionRange: {
                  dimension: "ROWS",
                  endIndex: 2600289184325747251,
                  sheetId: 5017162811654306096,
                  startIndex: 7603855259351207445,
                },
                locationType: "ROW",
                sheetId: 2506322079597413709,
                spreadsheet: true,
              },
              metadataValue: "tenetur",
              visibility: "PROJECT",
            },
            gridRange: {
              endColumnIndex: 383707075191105935,
              endRowIndex: 6818753813352583216,
              sheetId: 6009706352721322189,
              startColumnIndex: 8840854750162610815,
              startRowIndex: 2947416692006755002,
            },
          },
        },
        deleteDimension: {
          range: {
            dimension: "COLUMNS",
            endIndex: 326046690110882862,
            sheetId: 6552705210454833319,
            startIndex: 6441922636843880674,
          },
        },
        deleteDimensionGroup: {
          range: {
            dimension: "COLUMNS",
            endIndex: 3327060448761763468,
            sheetId: 1081122043834579132,
            startIndex: 8930200083783146457,
          },
        },
        deleteDuplicates: {
          comparisonColumns: [
            {
              dimension: "ROWS",
              endIndex: 4877843600825800243,
              sheetId: 8307510451281095935,
              startIndex: 4087259203947051350,
            },
            {
              dimension: "ROWS",
              endIndex: 2585483674518428436,
              sheetId: 645759458971570962,
              startIndex: 540137014173811062,
            },
            {
              dimension: "DIMENSION_UNSPECIFIED",
              endIndex: 3874922283462043724,
              sheetId: 3134497805167793555,
              startIndex: 2034469817524982452,
            },
          ],
          range: {
            endColumnIndex: 6562898604207867912,
            endRowIndex: 685280208288691906,
            sheetId: 3909679561121539253,
            startColumnIndex: 5145329571994412045,
            startRowIndex: 7452394055691100079,
          },
        },
        deleteEmbeddedObject: {
          objectId: 1702625268296580633,
        },
        deleteFilterView: {
          filterId: 4824062748754790116,
        },
        deleteNamedRange: {
          namedRangeId: "excepturi",
        },
        deleteProtectedRange: {
          protectedRangeId: 5365558882483174158,
        },
        deleteRange: {
          range: {
            endColumnIndex: 6670953800490069744,
            endRowIndex: 2057238304055519417,
            sheetId: 999049896497071892,
            startColumnIndex: 5656277922197181422,
            startRowIndex: 8337502561806770303,
          },
          shiftDimension: "DIMENSION_UNSPECIFIED",
        },
        deleteSheet: {
          sheetId: 1587973136011853532,
        },
        duplicateFilterView: {
          filterId: 8654530429391212953,
        },
        duplicateSheet: {
          insertSheetIndex: 6565414981006573639,
          newSheetId: 871446486799352316,
          newSheetName: "deleniti",
          sourceSheetId: 2096489696098150524,
        },
        findReplace: {
          allSheets: true,
          find: "temporibus",
          includeFormulas: true,
          matchCase: false,
          matchEntireCell: false,
          range: {
            endColumnIndex: 307101691492196479,
            endRowIndex: 3643238573569858735,
            sheetId: 4744627058255527899,
            startColumnIndex: 2172399365673429010,
            startRowIndex: 2905821416754051492,
          },
          replacement: "est",
          searchByRegex: false,
          sheetId: 2653237642917808213,
        },
        insertDimension: {
          inheritFromBefore: true,
          range: {
            dimension: "ROWS",
            endIndex: 7892387258292766169,
            sheetId: 4928825157438766623,
            startIndex: 4011412292147998797,
          },
        },
        insertRange: {
          range: {
            endColumnIndex: 5881773156154617224,
            endRowIndex: 7374830415225325393,
            sheetId: 8997855942340766684,
            startColumnIndex: 6112945120259488285,
            startRowIndex: 7114831923345888810,
          },
          shiftDimension: "COLUMNS",
        },
        mergeCells: {
          mergeType: "MERGE_ROWS",
          range: {
            endColumnIndex: 8698871352040162983,
            endRowIndex: 5974854685892500750,
            sheetId: 2002878445517204553,
            startColumnIndex: 6353423268616230319,
            startRowIndex: 3959002623939650165,
          },
        },
        moveDimension: {
          destinationIndex: 2883473395046115006,
          source: {
            dimension: "DIMENSION_UNSPECIFIED",
            endIndex: 7461311459972193347,
            sheetId: 5740019852834968400,
            startIndex: 5448810721365016153,
          },
        },
        pasteData: {
          coordinate: {
            columnIndex: 2167863577269207578,
            rowIndex: 7366460637049664774,
            sheetId: 5282458816441141655,
          },
          data: "quae",
          delimiter: "optio",
          html: true,
          type: "PASTE_DATA_VALIDATION",
        },
        randomizeRange: {
          range: {
            endColumnIndex: 3872752446051833643,
            endRowIndex: 5266974826536294862,
            sheetId: 3288860631288299934,
            startColumnIndex: 5454423633967802431,
            startRowIndex: 5626814533859760949,
          },
        },
        refreshDataSource: {
          dataSourceId: "eum",
          force: true,
          isAll: false,
          references: {
            references: [
              {
                chartId: 5950911296799863855,
                dataSourceFormulaCell: {
                  columnIndex: 6455763710944548629,
                  rowIndex: 1942710943887835026,
                  sheetId: 1722220632356978098,
                },
                dataSourcePivotTableAnchorCell: {
                  columnIndex: 9122082156418209617,
                  rowIndex: 4442786016472286075,
                  sheetId: 6781293124179642721,
                },
                dataSourceTableAnchorCell: {
                  columnIndex: 9199761038741226452,
                  rowIndex: 8826452010352805082,
                  sheetId: 4177093093733080629,
                },
                sheetId: "inventore",
              },
              {
                chartId: 6055084512964698748,
                dataSourceFormulaCell: {
                  columnIndex: 7671183238794366186,
                  rowIndex: 3313769357544573020,
                  sheetId: 5160053904489746873,
                },
                dataSourcePivotTableAnchorCell: {
                  columnIndex: 3885536157407887011,
                  rowIndex: 3390547216558567307,
                  sheetId: 4028618972026640461,
                },
                dataSourceTableAnchorCell: {
                  columnIndex: 3820364435015087698,
                  rowIndex: 3900852501111395041,
                  sheetId: 3781182383728721210,
                },
                sheetId: "vel",
              },
            ],
          },
        },
        repeatCell: {
          cell: {
            dataSourceFormula: {
              dataExecutionStatus: {
                errorCode: "TOO_MANY_CHARS_PER_CELL",
                errorMessage: "porro",
                lastRefreshTime: "velit",
                state: "DATA_EXECUTION_STATE_UNSPECIFIED",
              },
              dataSourceId: "tenetur",
            },
            dataSourceTable: {
              columnSelectionType: "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED",
              columns: [
                {
                  name: "nisi",
                },
                {
                  name: "dolores",
                },
              ],
              dataExecutionStatus: {
                errorCode: "TOO_MANY_CELLS",
                errorMessage: "quas",
                lastRefreshTime: "sunt",
                state: "FAILED",
              },
              dataSourceId: "sed",
              filterSpecs: [
                {
                  columnIndex: 4317592811457837803,
                  dataSourceColumnReference: {
                    name: "et",
                  },
                  filterCriteria: {
                    condition: {
                      type: "DATE_ON_OR_AFTER",
                      values: [
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "aspernatur",
                        },
                        {
                          relativeDate: "PAST_WEEK",
                          userEnteredValue: "tenetur",
                        },
                      ],
                    },
                    hiddenValues: [
                      "tempora",
                      "quae",
                      "omnis",
                    ],
                    visibleBackgroundColor: {
                      alpha: 38.099998,
                      blue: 90.099998,
                      green: 65.199997,
                      red: 38.099998,
                    },
                    visibleBackgroundColorStyle: {
                      rgbColor: {
                        alpha: 97.099998,
                        blue: 12.200000,
                        green: 90.199997,
                        red: 74.199997,
                      },
                      themeColor: "BACKGROUND",
                    },
                    visibleForegroundColor: {
                      alpha: 81.099998,
                      blue: 77.199997,
                      green: 61.099998,
                      red: 84.199997,
                    },
                    visibleForegroundColorStyle: {
                      rgbColor: {
                        alpha: 39.200001,
                        blue: 76.099998,
                        green: 53.099998,
                        red: 89.199997,
                      },
                      themeColor: "ACCENT6",
                    },
                  },
                },
              ],
              rowLimit: 3745854188617277637,
              sortSpecs: [
                {
                  backgroundColor: {
                    alpha: 72.199997,
                    blue: 42.099998,
                    green: 96.199997,
                    red: 22.100000,
                  },
                  backgroundColorStyle: {
                    rgbColor: {
                      alpha: 98.099998,
                      blue: 85.199997,
                      green: 73.199997,
                      red: 87.099998,
                    },
                    themeColor: "TEXT",
                  },
                  dataSourceColumnReference: {
                    name: "cumque",
                  },
                  dimensionIndex: 433794155759684143,
                  foregroundColor: {
                    alpha: 65.099998,
                    blue: 12.100000,
                    green: 32.099998,
                    red: 65.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 8.200000,
                      blue: 48.200001,
                      green: 4.100000,
                      red: 62.099998,
                    },
                    themeColor: "ACCENT6",
                  },
                  sortOrder: "DESCENDING",
                },
              ],
            },
            dataValidation: {
              condition: {
                type: "CONDITION_TYPE_UNSPECIFIED",
                values: [
                  {
                    relativeDate: "PAST_WEEK",
                    userEnteredValue: "veritatis",
                  },
                  {
                    relativeDate: "PAST_WEEK",
                    userEnteredValue: "in",
                  },
                ],
              },
              inputMessage: "eveniet",
              showCustomUi: true,
              strict: false,
            },
            effectiveFormat: {
              backgroundColor: {
                alpha: 11.100000,
                blue: 41.099998,
                green: 69.199997,
                red: 52.200001,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 78.199997,
                  blue: 44.099998,
                  green: 29.100000,
                  red: 96.199997,
                },
                themeColor: "ACCENT4",
              },
              borders: {
                bottom: {
                  color: {
                    alpha: 15.200000,
                    blue: 90.199997,
                    green: 41.200001,
                    red: 80.199997,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 23.200001,
                      blue: 33.099998,
                      green: 84.099998,
                      red: 77.199997,
                    },
                    themeColor: "TEXT",
                  },
                  style: "NONE",
                  width: 7734581398880175761,
                },
                left: {
                  color: {
                    alpha: 94.099998,
                    blue: 18.200001,
                    green: 56.200001,
                    red: 8.200000,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 66.199997,
                      blue: 51.099998,
                      green: 99.099998,
                      red: 9.100000,
                    },
                    themeColor: "TEXT",
                  },
                  style: "DOUBLE",
                  width: 7702574650952377039,
                },
                right: {
                  color: {
                    alpha: 0.100000,
                    blue: 10.200000,
                    green: 61.099998,
                    red: 28.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 25.100000,
                      blue: 96.199997,
                      green: 37.200001,
                      red: 29.100000,
                    },
                    themeColor: "ACCENT5",
                  },
                  style: "DASHED",
                  width: 8812083014882379332,
                },
                top: {
                  color: {
                    alpha: 64.099998,
                    blue: 38.099998,
                    green: 65.099998,
                    red: 50.099998,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 98.199997,
                      blue: 93.199997,
                      green: 12.100000,
                      red: 22.200001,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  style: "SOLID_THICK",
                  width: 3826134563862903559,
                },
              },
              horizontalAlignment: "CENTER",
              hyperlinkDisplayType: "PLAIN_TEXT",
              numberFormat: {
                pattern: "quo",
                type: "DATE_TIME",
              },
              padding: {
                bottom: 8661278270215459891,
                left: 6935213073250340737,
                right: 2865132050438331319,
                top: 8088236055682791948,
              },
              textDirection: "TEXT_DIRECTION_UNSPECIFIED",
              textFormat: {
                bold: false,
                fontFamily: "a",
                fontSize: 2372405662884888226,
                foregroundColor: {
                  alpha: 97.099998,
                  blue: 67.199997,
                  green: 58.200001,
                  red: 97.199997,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 33.200001,
                    blue: 84.099998,
                    green: 39.099998,
                    red: 89.199997,
                  },
                  themeColor: "ACCENT4",
                },
                italic: false,
                link: {
                  uri: "quo",
                },
                strikethrough: true,
                underline: true,
              },
              textRotation: {
                angle: 5756834384099221752,
                vertical: false,
              },
              verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
              wrapStrategy: "LEGACY_WRAP",
            },
            effectiveValue: {
              boolValue: true,
              errorValue: {
                message: "qui",
                type: "NULL_VALUE",
              },
              formulaValue: "tempore",
              numberValue: 63.200001,
              stringValue: "possimus",
            },
            formattedValue: "et",
            hyperlink: "ut",
            note: "modi",
            pivotTable: {
              columns: [
                {
                  dataSourceColumnReference: {
                    name: "labore",
                  },
                  groupLimit: {
                    applyOrder: 7149074025047917855,
                    countLimit: 518270895845464006,
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "SECOND",
                    },
                    histogramRule: {
                      end: 11.200000,
                      interval: 36.200001,
                      start: 81.099998,
                    },
                    manualRule: {
                      groups: [
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "mollitia",
                              type: "ERROR",
                            },
                            formulaValue: "blanditiis",
                            numberValue: 9.200000,
                            stringValue: "et",
                          },
                          items: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "harum",
                                type: "ERROR",
                              },
                              formulaValue: "rem",
                              numberValue: 95.199997,
                              stringValue: "molestiae",
                            },
                          ],
                        },
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "repellendus",
                              type: "ERROR",
                            },
                            formulaValue: "sapiente",
                            numberValue: 41.099998,
                            stringValue: "vitae",
                          },
                          items: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "in",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "tenetur",
                              numberValue: 95.199997,
                              stringValue: "pariatur",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "earum",
                                type: "NAME",
                              },
                              formulaValue: "vitae",
                              numberValue: 80.099998,
                              stringValue: "soluta",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  label: "vero",
                  repeatHeadings: false,
                  showTotals: false,
                  sortOrder: "ASCENDING",
                  sourceColumnOffset: 4405875028857097227,
                  valueBucket: {
                    buckets: [
                      {
                        boolValue: true,
                        errorValue: {
                          message: "esse",
                          type: "NUM",
                        },
                        formulaValue: "ex",
                        numberValue: 17.100000,
                        stringValue: "aut",
                      },
                      {
                        boolValue: true,
                        errorValue: {
                          message: "nesciunt",
                          type: "LOADING",
                        },
                        formulaValue: "omnis",
                        numberValue: 3.100000,
                        stringValue: "rem",
                      },
                    ],
                    valuesIndex: 2231082986076213377,
                  },
                  valueMetadata: [
                    {
                      collapsed: true,
                      value: {
                        boolValue: false,
                        errorValue: {
                          message: "qui",
                          type: "NUM",
                        },
                        formulaValue: "et",
                        numberValue: 18.200001,
                        stringValue: "voluptates",
                      },
                    },
                    {
                      collapsed: false,
                      value: {
                        boolValue: true,
                        errorValue: {
                          message: "et",
                          type: "DIVIDE_BY_ZERO",
                        },
                        formulaValue: "a",
                        numberValue: 78.099998,
                        stringValue: "reprehenderit",
                      },
                    },
                    {
                      collapsed: false,
                      value: {
                        boolValue: false,
                        errorValue: {
                          message: "nihil",
                          type: "NULL_VALUE",
                        },
                        formulaValue: "qui",
                        numberValue: 91.199997,
                        stringValue: "dolore",
                      },
                    },
                  ],
                },
              ],
              criteria: {
                "sed": {
                  condition: {
                    type: "TEXT_ENDS_WITH",
                    values: [
                      {
                        relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                        userEnteredValue: "enim",
                      },
                    ],
                  },
                  visibleByDefault: true,
                  visibleValues: [
                    "exercitationem",
                  ],
                },
              },
              dataExecutionStatus: {
                errorCode: "INTERRUPTED",
                errorMessage: "porro",
                lastRefreshTime: "omnis",
                state: "DATA_EXECUTION_STATE_UNSPECIFIED",
              },
              dataSourceId: "est",
              filterSpecs: [
                {
                  columnOffsetIndex: 3698161735546081272,
                  dataSourceColumnReference: {
                    name: "cum",
                  },
                  filterCriteria: {
                    condition: {
                      type: "NUMBER_LESS_THAN_EQ",
                      values: [
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "et",
                        },
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "qui",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "ut",
                        },
                      ],
                    },
                    visibleByDefault: true,
                    visibleValues: [
                      "soluta",
                      "id",
                    ],
                  },
                },
              ],
              rows: [
                {
                  dataSourceColumnReference: {
                    name: "consequatur",
                  },
                  groupLimit: {
                    applyOrder: 813340762720992919,
                    countLimit: 4204886750801245908,
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "HOUR_MINUTE",
                    },
                    histogramRule: {
                      end: 72.199997,
                      interval: 97.199997,
                      start: 58.200001,
                    },
                    manualRule: {
                      groups: [
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "id",
                              type: "NULL_VALUE",
                            },
                            formulaValue: "commodi",
                            numberValue: 59.099998,
                            stringValue: "dolores",
                          },
                          items: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "quibusdam",
                                type: "REF",
                              },
                              formulaValue: "doloribus",
                              numberValue: 93.199997,
                              stringValue: "et",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  label: "accusantium",
                  repeatHeadings: false,
                  showTotals: true,
                  sortOrder: "ASCENDING",
                  sourceColumnOffset: 9011092060833489838,
                  valueBucket: {
                    buckets: [
                      {
                        boolValue: true,
                        errorValue: {
                          message: "aut",
                          type: "DIVIDE_BY_ZERO",
                        },
                        formulaValue: "ab",
                        numberValue: 9.200000,
                        stringValue: "deserunt",
                      },
                      {
                        boolValue: false,
                        errorValue: {
                          message: "suscipit",
                          type: "NUM",
                        },
                        formulaValue: "quia",
                        numberValue: 7.200000,
                        stringValue: "accusamus",
                      },
                      {
                        boolValue: false,
                        errorValue: {
                          message: "eius",
                          type: "NUM",
                        },
                        formulaValue: "possimus",
                        numberValue: 59.200001,
                        stringValue: "dolore",
                      },
                    ],
                    valuesIndex: 2816806705459830973,
                  },
                  valueMetadata: [
                    {
                      collapsed: true,
                      value: {
                        boolValue: true,
                        errorValue: {
                          message: "ratione",
                          type: "NUM",
                        },
                        formulaValue: "omnis",
                        numberValue: 0.200000,
                        stringValue: "error",
                      },
                    },
                  ],
                },
                {
                  dataSourceColumnReference: {
                    name: "recusandae",
                  },
                  groupLimit: {
                    applyOrder: 1785993079378686568,
                    countLimit: 9036861541670603547,
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH",
                    },
                    histogramRule: {
                      end: 40.200001,
                      interval: 42.099998,
                      start: 52.200001,
                    },
                    manualRule: {
                      groups: [
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "cupiditate",
                              type: "NUM",
                            },
                            formulaValue: "qui",
                            numberValue: 37.099998,
                            stringValue: "nam",
                          },
                          items: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "modi",
                                type: "NUM",
                              },
                              formulaValue: "asperiores",
                              numberValue: 29.200001,
                              stringValue: "ab",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "animi",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "dolorum",
                              numberValue: 59.099998,
                              stringValue: "voluptatum",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "nemo",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "quia",
                              numberValue: 97.099998,
                              stringValue: "illum",
                            },
                          ],
                        },
                        {
                          groupName: {
                            boolValue: false,
                            errorValue: {
                              message: "voluptatibus",
                              type: "ERROR_TYPE_UNSPECIFIED",
                            },
                            formulaValue: "ab",
                            numberValue: 5.200000,
                            stringValue: "numquam",
                          },
                          items: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "rem",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "ut",
                              numberValue: 17.200001,
                              stringValue: "in",
                            },
                          ],
                        },
                        {
                          groupName: {
                            boolValue: true,
                            errorValue: {
                              message: "asperiores",
                              type: "LOADING",
                            },
                            formulaValue: "doloremque",
                            numberValue: 40.099998,
                            stringValue: "quia",
                          },
                          items: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "nemo",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "vero",
                              numberValue: 5.200000,
                              stringValue: "enim",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "asperiores",
                                type: "REF",
                              },
                              formulaValue: "praesentium",
                              numberValue: 58.099998,
                              stringValue: "ipsa",
                            },
                          ],
                        },
                      ],
                    },
                  },
                  label: "autem",
                  repeatHeadings: false,
                  showTotals: true,
                  sortOrder: "SORT_ORDER_UNSPECIFIED",
                  sourceColumnOffset: 778805455455274238,
                  valueBucket: {
                    buckets: [
                      {
                        boolValue: false,
                        errorValue: {
                          message: "officia",
                          type: "NULL_VALUE",
                        },
                        formulaValue: "quia",
                        numberValue: 37.200001,
                        stringValue: "iure",
                      },
                      {
                        boolValue: false,
                        errorValue: {
                          message: "aspernatur",
                          type: "N_A",
                        },
                        formulaValue: "sed",
                        numberValue: 28.200001,
                        stringValue: "dolor",
                      },
                    ],
                    valuesIndex: 866913342261046226,
                  },
                  valueMetadata: [
                    {
                      collapsed: false,
                      value: {
                        boolValue: true,
                        errorValue: {
                          message: "tempora",
                          type: "NUM",
                        },
                        formulaValue: "tenetur",
                        numberValue: 98.199997,
                        stringValue: "delectus",
                      },
                    },
                    {
                      collapsed: true,
                      value: {
                        boolValue: false,
                        errorValue: {
                          message: "ut",
                          type: "REF",
                        },
                        formulaValue: "nihil",
                        numberValue: 7.200000,
                        stringValue: "pariatur",
                      },
                    },
                  ],
                },
              ],
              source: {
                endColumnIndex: 2711805889233665009,
                endRowIndex: 957974442349416926,
                sheetId: 6823928131810546879,
                startColumnIndex: 6931710993357369250,
                startRowIndex: 3084837031031889247,
              },
              valueLayout: "HORIZONTAL",
              values: [
                {
                  calculatedDisplayType: "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
                  dataSourceColumnReference: {
                    name: "est",
                  },
                  formula: "eum",
                  name: "non",
                  sourceColumnOffset: 3759467808020195888,
                  summarizeFunction: "VARP",
                },
                {
                  calculatedDisplayType: "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
                  dataSourceColumnReference: {
                    name: "cumque",
                  },
                  formula: "illum",
                  name: "et",
                  sourceColumnOffset: 9075293952596351043,
                  summarizeFunction: "COUNTA",
                },
              ],
            },
            textFormatRuns: [
              {
                format: {
                  bold: true,
                  fontFamily: "id",
                  fontSize: 4164162358347029336,
                  foregroundColor: {
                    alpha: 29.200001,
                    blue: 99.099998,
                    green: 75.099998,
                    red: 85.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 45.200001,
                      blue: 43.200001,
                      green: 12.200000,
                      red: 92.099998,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  italic: false,
                  link: {
                    uri: "sit",
                  },
                  strikethrough: true,
                  underline: false,
                },
                startIndex: 6726590313934171902,
              },
              {
                format: {
                  bold: true,
                  fontFamily: "omnis",
                  fontSize: 578402632823204352,
                  foregroundColor: {
                    alpha: 21.200001,
                    blue: 47.200001,
                    green: 54.099998,
                    red: 91.099998,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 94.099998,
                      blue: 78.199997,
                      green: 12.100000,
                      red: 17.100000,
                    },
                    themeColor: "LINK",
                  },
                  italic: false,
                  link: {
                    uri: "magni",
                  },
                  strikethrough: false,
                  underline: true,
                },
                startIndex: 5706802383739456350,
              },
              {
                format: {
                  bold: true,
                  fontFamily: "eligendi",
                  fontSize: 7231507988354821431,
                  foregroundColor: {
                    alpha: 88.099998,
                    blue: 24.100000,
                    green: 74.099998,
                    red: 18.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 10.200000,
                      blue: 30.200001,
                      green: 41.099998,
                      red: 33.200001,
                    },
                    themeColor: "ACCENT2",
                  },
                  italic: true,
                  link: {
                    uri: "est",
                  },
                  strikethrough: true,
                  underline: false,
                },
                startIndex: 1589487237543444481,
              },
            ],
            userEnteredFormat: {
              backgroundColor: {
                alpha: 5.200000,
                blue: 2.100000,
                green: 53.200001,
                red: 26.100000,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 71.099998,
                  blue: 48.200001,
                  green: 21.200001,
                  red: 18.200001,
                },
                themeColor: "LINK",
              },
              borders: {
                bottom: {
                  color: {
                    alpha: 27.200001,
                    blue: 72.199997,
                    green: 86.099998,
                    red: 18.100000,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 79.199997,
                      blue: 42.200001,
                      green: 96.199997,
                      red: 30.200001,
                    },
                    themeColor: "ACCENT2",
                  },
                  style: "DOTTED",
                  width: 8602592006937262505,
                },
                left: {
                  color: {
                    alpha: 25.200001,
                    blue: 59.099998,
                    green: 44.200001,
                    red: 34.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 2.100000,
                      blue: 14.100000,
                      green: 33.099998,
                      red: 67.199997,
                    },
                    themeColor: "ACCENT3",
                  },
                  style: "SOLID_THICK",
                  width: 7389259227542744235,
                },
                right: {
                  color: {
                    alpha: 19.100000,
                    blue: 24.200001,
                    green: 90.199997,
                    red: 25.100000,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 19.100000,
                      blue: 15.200000,
                      green: 71.199997,
                      red: 6.100000,
                    },
                    themeColor: "ACCENT4",
                  },
                  style: "NONE",
                  width: 3612692462440753970,
                },
                top: {
                  color: {
                    alpha: 65.099998,
                    blue: 83.099998,
                    green: 91.099998,
                    red: 57.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 97.199997,
                      blue: 63.200001,
                      green: 45.200001,
                      red: 47.099998,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  style: "SOLID_THICK",
                  width: 1252821680836341792,
                },
              },
              horizontalAlignment: "LEFT",
              hyperlinkDisplayType: "LINKED",
              numberFormat: {
                pattern: "quos",
                type: "SCIENTIFIC",
              },
              padding: {
                bottom: 8672590045678548168,
                left: 8122869735581352161,
                right: 1656960058597590170,
                top: 4799309958359102034,
              },
              textDirection: "TEXT_DIRECTION_UNSPECIFIED",
              textFormat: {
                bold: false,
                fontFamily: "reiciendis",
                fontSize: 6118450050920846813,
                foregroundColor: {
                  alpha: 45.099998,
                  blue: 24.200001,
                  green: 86.099998,
                  red: 41.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 81.199997,
                    blue: 69.199997,
                    green: 83.199997,
                    red: 66.199997,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                italic: true,
                link: {
                  uri: "quae",
                },
                strikethrough: false,
                underline: true,
              },
              textRotation: {
                angle: 747749460695397914,
                vertical: false,
              },
              verticalAlignment: "MIDDLE",
              wrapStrategy: "WRAP",
            },
            userEnteredValue: {
              boolValue: false,
              errorValue: {
                message: "ad",
                type: "ERROR",
              },
              formulaValue: "ratione",
              numberValue: 52.099998,
              stringValue: "in",
            },
          },
          fields: "nostrum",
          range: {
            endColumnIndex: 2108171280205411296,
            endRowIndex: 1192533598599421193,
            sheetId: 2992908850661201588,
            startColumnIndex: 2673385315024470338,
            startRowIndex: 5788450139848629211,
          },
        },
        setBasicFilter: {
          filter: {
            criteria: {
              "eum": {
                condition: {
                  type: "CONDITION_TYPE_UNSPECIFIED",
                  values: [
                    {
                      relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                      userEnteredValue: "et",
                    },
                  ],
                },
                hiddenValues: [
                  "quia",
                  "veritatis",
                ],
                visibleBackgroundColor: {
                  alpha: 98.199997,
                  blue: 50.200001,
                  green: 69.199997,
                  red: 60.099998,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 44.200001,
                    blue: 38.200001,
                    green: 27.100000,
                    red: 43.099998,
                  },
                  themeColor: "ACCENT4",
                },
                visibleForegroundColor: {
                  alpha: 50.200001,
                  blue: 74.099998,
                  green: 22.100000,
                  red: 82.099998,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 14.100000,
                    blue: 79.099998,
                    green: 39.099998,
                    red: 38.200001,
                  },
                  themeColor: "ACCENT4",
                },
              },
              "fugiat": {
                condition: {
                  type: "DATE_BETWEEN",
                  values: [
                    {
                      relativeDate: "TOMORROW",
                      userEnteredValue: "sunt",
                    },
                    {
                      relativeDate: "PAST_YEAR",
                      userEnteredValue: "atque",
                    },
                    {
                      relativeDate: "PAST_MONTH",
                      userEnteredValue: "enim",
                    },
                  ],
                },
                hiddenValues: [
                  "nisi",
                  "ea",
                  "odit",
                ],
                visibleBackgroundColor: {
                  alpha: 3.100000,
                  blue: 42.200001,
                  green: 62.200001,
                  red: 61.200001,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 71.199997,
                    blue: 60.200001,
                    green: 2.200000,
                    red: 97.199997,
                  },
                  themeColor: "TEXT",
                },
                visibleForegroundColor: {
                  alpha: 66.099998,
                  blue: 43.200001,
                  green: 88.099998,
                  red: 12.200000,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 99.099998,
                    blue: 34.099998,
                    green: 74.099998,
                    red: 75.199997,
                  },
                  themeColor: "ACCENT3",
                },
              },
            },
            filterSpecs: [
              {
                columnIndex: 1531407450354071712,
                dataSourceColumnReference: {
                  name: "tempora",
                },
                filterCriteria: {
                  condition: {
                    type: "ONE_OF_RANGE",
                    values: [
                      {
                        relativeDate: "TODAY",
                        userEnteredValue: "excepturi",
                      },
                      {
                        relativeDate: "YESTERDAY",
                        userEnteredValue: "neque",
                      },
                    ],
                  },
                  hiddenValues: [
                    "ipsam",
                    "soluta",
                    "rerum",
                  ],
                  visibleBackgroundColor: {
                    alpha: 1.100000,
                    blue: 82.199997,
                    green: 39.200001,
                    red: 0.100000,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 70.199997,
                      blue: 14.100000,
                      green: 52.200001,
                      red: 91.199997,
                    },
                    themeColor: "ACCENT6",
                  },
                  visibleForegroundColor: {
                    alpha: 83.099998,
                    blue: 72.099998,
                    green: 13.100000,
                    red: 6.200000,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 50.099998,
                      blue: 35.099998,
                      green: 5.100000,
                      red: 4.200000,
                    },
                    themeColor: "BACKGROUND",
                  },
                },
              },
              {
                columnIndex: 5567297485950383655,
                dataSourceColumnReference: {
                  name: "earum",
                },
                filterCriteria: {
                  condition: {
                    type: "ONE_OF_LIST",
                    values: [
                      {
                        relativeDate: "PAST_MONTH",
                        userEnteredValue: "dolorum",
                      },
                      {
                        relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                        userEnteredValue: "quo",
                      },
                      {
                        relativeDate: "PAST_MONTH",
                        userEnteredValue: "dolores",
                      },
                    ],
                  },
                  hiddenValues: [
                    "fugiat",
                    "aliquid",
                  ],
                  visibleBackgroundColor: {
                    alpha: 18.200001,
                    blue: 83.099998,
                    green: 93.199997,
                    red: 52.099998,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 43.200001,
                      blue: 33.200001,
                      green: 21.200001,
                      red: 89.099998,
                    },
                    themeColor: "LINK",
                  },
                  visibleForegroundColor: {
                    alpha: 74.099998,
                    blue: 90.199997,
                    green: 67.099998,
                    red: 47.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 83.199997,
                      blue: 96.099998,
                      green: 4.100000,
                      red: 51.200001,
                    },
                    themeColor: "ACCENT3",
                  },
                },
              },
            ],
            range: {
              endColumnIndex: 7690129850912182009,
              endRowIndex: 1750125061747295283,
              sheetId: 4759596382278972942,
              startColumnIndex: 4846968028787810744,
              startRowIndex: 1246842862051589412,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 90.099998,
                  blue: 94.199997,
                  green: 99.199997,
                  red: 22.100000,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 96.099998,
                    blue: 36.099998,
                    green: 26.100000,
                    red: 87.099998,
                  },
                  themeColor: "ACCENT1",
                },
                dataSourceColumnReference: {
                  name: "harum",
                },
                dimensionIndex: 5985227941085641517,
                foregroundColor: {
                  alpha: 88.199997,
                  blue: 6.100000,
                  green: 20.100000,
                  red: 35.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 4.200000,
                    blue: 19.100000,
                    green: 5.100000,
                    red: 11.200000,
                  },
                  themeColor: "ACCENT6",
                },
                sortOrder: "SORT_ORDER_UNSPECIFIED",
              },
              {
                backgroundColor: {
                  alpha: 83.099998,
                  blue: 52.200001,
                  green: 69.099998,
                  red: 69.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 87.099998,
                    blue: 5.200000,
                    green: 53.200001,
                    red: 1.100000,
                  },
                  themeColor: "ACCENT5",
                },
                dataSourceColumnReference: {
                  name: "dolores",
                },
                dimensionIndex: 6910168788341718521,
                foregroundColor: {
                  alpha: 50.099998,
                  blue: 67.199997,
                  green: 83.199997,
                  red: 31.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 26.100000,
                    blue: 29.200001,
                    green: 86.099998,
                    red: 28.200001,
                  },
                  themeColor: "ACCENT3",
                },
                sortOrder: "DESCENDING",
              },
              {
                backgroundColor: {
                  alpha: 94.199997,
                  blue: 95.099998,
                  green: 35.099998,
                  red: 72.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 49.200001,
                    blue: 83.199997,
                    green: 60.200001,
                    red: 12.200000,
                  },
                  themeColor: "LINK",
                },
                dataSourceColumnReference: {
                  name: "et",
                },
                dimensionIndex: 4484923237655051096,
                foregroundColor: {
                  alpha: 77.099998,
                  blue: 30.200001,
                  green: 15.200000,
                  red: 13.100000,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 88.199997,
                    blue: 95.099998,
                    green: 94.099998,
                    red: 96.099998,
                  },
                  themeColor: "ACCENT4",
                },
                sortOrder: "SORT_ORDER_UNSPECIFIED",
              },
            ],
          },
        },
        setDataValidation: {
          range: {
            endColumnIndex: 7002468192383897215,
            endRowIndex: 7183543446277420226,
            sheetId: 6087374014520899973,
            startColumnIndex: 4923247326437458255,
            startRowIndex: 1415853133553196602,
          },
          rule: {
            condition: {
              type: "DATE_BETWEEN",
              values: [
                {
                  relativeDate: "PAST_YEAR",
                  userEnteredValue: "quibusdam",
                },
              ],
            },
            inputMessage: "atque",
            showCustomUi: false,
            strict: true,
          },
        },
        sortRange: {
          range: {
            endColumnIndex: 8248731132835699194,
            endRowIndex: 2765353632759592458,
            sheetId: 2206186462465520915,
            startColumnIndex: 8368094193429210357,
            startRowIndex: 6633393125002403220,
          },
          sortSpecs: [
            {
              backgroundColor: {
                alpha: 57.099998,
                blue: 80.199997,
                green: 29.100000,
                red: 95.099998,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 45.099998,
                  blue: 50.200001,
                  green: 39.099998,
                  red: 22.200001,
                },
                themeColor: "ACCENT5",
              },
              dataSourceColumnReference: {
                name: "corrupti",
              },
              dimensionIndex: 5068743659708474220,
              foregroundColor: {
                alpha: 30.200001,
                blue: 99.199997,
                green: 23.200001,
                red: 43.099998,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 97.199997,
                  blue: 23.200001,
                  green: 16.100000,
                  red: 78.199997,
                },
                themeColor: "ACCENT2",
              },
              sortOrder: "ASCENDING",
            },
            {
              backgroundColor: {
                alpha: 32.200001,
                blue: 72.199997,
                green: 67.199997,
                red: 96.099998,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 67.099998,
                  blue: 87.199997,
                  green: 33.200001,
                  red: 17.100000,
                },
                themeColor: "ACCENT6",
              },
              dataSourceColumnReference: {
                name: "veniam",
              },
              dimensionIndex: 1806069710911169440,
              foregroundColor: {
                alpha: 56.099998,
                blue: 46.200001,
                green: 67.199997,
                red: 43.099998,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 50.200001,
                  blue: 47.099998,
                  green: 21.200001,
                  red: 39.200001,
                },
                themeColor: "ACCENT3",
              },
              sortOrder: "SORT_ORDER_UNSPECIFIED",
            },
            {
              backgroundColor: {
                alpha: 70.099998,
                blue: 48.099998,
                green: 63.099998,
                red: 26.100000,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 68.199997,
                  blue: 36.099998,
                  green: 47.099998,
                  red: 34.200001,
                },
                themeColor: "ACCENT1",
              },
              dataSourceColumnReference: {
                name: "inventore",
              },
              dimensionIndex: 1360255270646838994,
              foregroundColor: {
                alpha: 28.200001,
                blue: 29.100000,
                green: 42.200001,
                red: 82.099998,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 71.199997,
                  blue: 60.099998,
                  green: 81.099998,
                  red: 56.200001,
                },
                themeColor: "TEXT",
              },
              sortOrder: "SORT_ORDER_UNSPECIFIED",
            },
          ],
        },
        textToColumns: {
          delimiter: "ut",
          delimiterType: "SEMICOLON",
          source: {
            endColumnIndex: 7697039777735503651,
            endRowIndex: 2022059670702095795,
            sheetId: 7699506691454518288,
            startColumnIndex: 5818635299030646939,
            startRowIndex: 7543422113808992853,
          },
        },
        trimWhitespace: {
          range: {
            endColumnIndex: 7815788463045105429,
            endRowIndex: 5877978872737716156,
            sheetId: 2065479573448709842,
            startColumnIndex: 7157619514308359869,
            startRowIndex: 5220986839967472874,
          },
        },
        unmergeCells: {
          range: {
            endColumnIndex: 3919309404320781378,
            endRowIndex: 3294430485798930711,
            sheetId: 29842910904181324,
            startColumnIndex: 1691911402985341343,
            startRowIndex: 2032581566360438711,
          },
        },
        updateBanding: {
          bandedRange: {
            bandedRangeId: 3117511645554173271,
            columnProperties: {
              firstBandColor: {
                alpha: 1.100000,
                blue: 7.200000,
                green: 86.099998,
                red: 44.200001,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 69.199997,
                  blue: 8.100000,
                  green: 31.200001,
                  red: 0.200000,
                },
                themeColor: "ACCENT1",
              },
              footerColor: {
                alpha: 21.100000,
                blue: 98.199997,
                green: 68.199997,
                red: 5.200000,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 26.200001,
                  blue: 4.200000,
                  green: 90.099998,
                  red: 6.100000,
                },
                themeColor: "ACCENT1",
              },
              headerColor: {
                alpha: 95.199997,
                blue: 45.200001,
                green: 85.199997,
                red: 59.099998,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 3.100000,
                  blue: 19.100000,
                  green: 90.099998,
                  red: 0.100000,
                },
                themeColor: "ACCENT2",
              },
              secondBandColor: {
                alpha: 45.099998,
                blue: 39.099998,
                green: 83.099998,
                red: 44.099998,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 39.200001,
                  blue: 21.200001,
                  green: 51.099998,
                  red: 53.099998,
                },
                themeColor: "ACCENT1",
              },
            },
            range: {
              endColumnIndex: 5697810874022768301,
              endRowIndex: 3656165176764904308,
              sheetId: 5076055979029686948,
              startColumnIndex: 137507337722918059,
              startRowIndex: 7480507545444074354,
            },
            rowProperties: {
              firstBandColor: {
                alpha: 43.200001,
                blue: 25.200001,
                green: 57.099998,
                red: 97.199997,
              },
              firstBandColorStyle: {
                rgbColor: {
                  alpha: 44.099998,
                  blue: 58.099998,
                  green: 86.199997,
                  red: 61.099998,
                },
                themeColor: "ACCENT4",
              },
              footerColor: {
                alpha: 22.200001,
                blue: 52.099998,
                green: 94.099998,
                red: 38.200001,
              },
              footerColorStyle: {
                rgbColor: {
                  alpha: 92.099998,
                  blue: 64.099998,
                  green: 63.200001,
                  red: 56.200001,
                },
                themeColor: "ACCENT4",
              },
              headerColor: {
                alpha: 53.200001,
                blue: 95.099998,
                green: 77.199997,
                red: 21.100000,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 95.199997,
                  blue: 85.099998,
                  green: 99.099998,
                  red: 40.200001,
                },
                themeColor: "ACCENT6",
              },
              secondBandColor: {
                alpha: 33.200001,
                blue: 22.100000,
                green: 7.200000,
                red: 56.099998,
              },
              secondBandColorStyle: {
                rgbColor: {
                  alpha: 97.099998,
                  blue: 89.199997,
                  green: 98.099998,
                  red: 54.099998,
                },
                themeColor: "BACKGROUND",
              },
            },
          },
          fields: "quia",
        },
        updateBorders: {
          bottom: {
            color: {
              alpha: 79.199997,
              blue: 52.200001,
              green: 66.099998,
              red: 92.099998,
            },
            colorStyle: {
              rgbColor: {
                alpha: 47.200001,
                blue: 85.199997,
                green: 26.100000,
                red: 33.099998,
              },
              themeColor: "ACCENT4",
            },
            style: "DOUBLE",
            width: 1666813016036093863,
          },
          innerHorizontal: {
            color: {
              alpha: 62.099998,
              blue: 66.099998,
              green: 99.199997,
              red: 49.200001,
            },
            colorStyle: {
              rgbColor: {
                alpha: 74.099998,
                blue: 93.199997,
                green: 26.100000,
                red: 78.099998,
              },
              themeColor: "ACCENT5",
            },
            style: "NONE",
            width: 1596208050830488021,
          },
          innerVertical: {
            color: {
              alpha: 38.200001,
              blue: 11.200000,
              green: 25.100000,
              red: 40.099998,
            },
            colorStyle: {
              rgbColor: {
                alpha: 88.099998,
                blue: 63.099998,
                green: 57.200001,
                red: 28.100000,
              },
              themeColor: "BACKGROUND",
            },
            style: "DASHED",
            width: 5756861921549140493,
          },
          left: {
            color: {
              alpha: 11.100000,
              blue: 41.099998,
              green: 72.199997,
              red: 26.200001,
            },
            colorStyle: {
              rgbColor: {
                alpha: 87.099998,
                blue: 54.200001,
                green: 90.099998,
                red: 39.200001,
              },
              themeColor: "BACKGROUND",
            },
            style: "STYLE_UNSPECIFIED",
            width: 6575807370860278254,
          },
          range: {
            endColumnIndex: 7986637037527219619,
            endRowIndex: 1229619205957602573,
            sheetId: 8396494554149531952,
            startColumnIndex: 4359341924087249639,
            startRowIndex: 8080771289815909373,
          },
          right: {
            color: {
              alpha: 60.099998,
              blue: 89.099998,
              green: 18.100000,
              red: 14.200000,
            },
            colorStyle: {
              rgbColor: {
                alpha: 22.200001,
                blue: 14.200000,
                green: 66.099998,
                red: 46.200001,
              },
              themeColor: "ACCENT3",
            },
            style: "DOTTED",
            width: 1442519143313087305,
          },
          top: {
            color: {
              alpha: 15.100000,
              blue: 64.199997,
              green: 41.200001,
              red: 37.099998,
            },
            colorStyle: {
              rgbColor: {
                alpha: 13.100000,
                blue: 51.200001,
                green: 10.100000,
                red: 24.100000,
              },
              themeColor: "LINK",
            },
            style: "DOTTED",
            width: 2279528983349885579,
          },
        },
        updateCells: {
          fields: "assumenda",
          range: {
            endColumnIndex: 3607859340712713755,
            endRowIndex: 4454794447797963004,
            sheetId: 8915626347705057232,
            startColumnIndex: 5532674203283270393,
            startRowIndex: 3029587975548064220,
          },
          rows: [
            {
              values: [
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "TOO_MANY_CHARS_PER_CELL",
                      errorMessage: "provident",
                      lastRefreshTime: "numquam",
                      state: "RUNNING",
                    },
                    dataSourceId: "harum",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SELECTED",
                    columns: [
                      {
                        name: "et",
                      },
                      {
                        name: "aut",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "PARAMETER_INVALID",
                      errorMessage: "in",
                      lastRefreshTime: "ut",
                      state: "NOT_STARTED",
                    },
                    dataSourceId: "repudiandae",
                    filterSpecs: [
                      {
                        columnIndex: 2291503873880977994,
                        dataSourceColumnReference: {
                          name: "est",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_ENDS_WITH",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "nesciunt",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "enim",
                              },
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "id",
                              },
                            ],
                          },
                          hiddenValues: [
                            "ea",
                            "impedit",
                          ],
                          visibleBackgroundColor: {
                            alpha: 91.099998,
                            blue: 36.099998,
                            green: 53.200001,
                            red: 76.199997,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 7.200000,
                              blue: 58.200001,
                              green: 63.200001,
                              red: 20.200001,
                            },
                            themeColor: "ACCENT2",
                          },
                          visibleForegroundColor: {
                            alpha: 28.200001,
                            blue: 11.100000,
                            green: 74.099998,
                            red: 36.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 5.200000,
                              blue: 77.199997,
                              green: 14.200000,
                              red: 26.100000,
                            },
                            themeColor: "ACCENT2",
                          },
                        },
                      },
                    ],
                    rowLimit: 1612999348962381704,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 29.100000,
                          blue: 15.100000,
                          green: 4.200000,
                          red: 17.100000,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 12.100000,
                            blue: 15.100000,
                            green: 27.200001,
                            red: 39.099998,
                          },
                          themeColor: "TEXT",
                        },
                        dataSourceColumnReference: {
                          name: "iste",
                        },
                        dimensionIndex: 8868936314325337329,
                        foregroundColor: {
                          alpha: 56.099998,
                          blue: 84.099998,
                          green: 79.199997,
                          red: 2.100000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 23.100000,
                            blue: 98.099998,
                            green: 6.200000,
                            red: 55.099998,
                          },
                          themeColor: "ACCENT2",
                        },
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                      },
                      {
                        backgroundColor: {
                          alpha: 15.200000,
                          blue: 28.200001,
                          green: 81.199997,
                          red: 62.099998,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 43.099998,
                            blue: 59.099998,
                            green: 6.100000,
                            red: 15.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        dataSourceColumnReference: {
                          name: "ullam",
                        },
                        dimensionIndex: 7342949252159309792,
                        foregroundColor: {
                          alpha: 84.099998,
                          blue: 6.200000,
                          green: 81.199997,
                          red: 48.099998,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 20.200001,
                            blue: 8.200000,
                            green: 25.100000,
                            red: 86.199997,
                          },
                          themeColor: "ACCENT6",
                        },
                        sortOrder: "DESCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "CUSTOM_FORMULA",
                      values: [
                        {
                          relativeDate: "PAST_YEAR",
                          userEnteredValue: "quasi",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "eius",
                        },
                        {
                          relativeDate: "TOMORROW",
                          userEnteredValue: "fugiat",
                        },
                      ],
                    },
                    inputMessage: "deleniti",
                    showCustomUi: true,
                    strict: true,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 65.099998,
                      blue: 72.099998,
                      green: 76.099998,
                      red: 99.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 17.100000,
                        blue: 49.200001,
                        green: 68.099998,
                        red: 18.100000,
                      },
                      themeColor: "ACCENT2",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 66.099998,
                          blue: 83.199997,
                          green: 26.200001,
                          red: 89.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 30.200001,
                            blue: 87.099998,
                            green: 19.100000,
                            red: 25.100000,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "DOUBLE",
                        width: 8512477161421071738,
                      },
                      left: {
                        color: {
                          alpha: 75.099998,
                          blue: 96.099998,
                          green: 44.099998,
                          red: 99.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 3.200000,
                            blue: 18.200001,
                            green: 47.200001,
                            red: 13.100000,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "NONE",
                        width: 3669729762675941993,
                      },
                      right: {
                        color: {
                          alpha: 78.199997,
                          blue: 39.200001,
                          green: 9.100000,
                          red: 59.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 32.099998,
                            blue: 54.200001,
                            green: 77.199997,
                            red: 66.199997,
                          },
                          themeColor: "LINK",
                        },
                        style: "DOTTED",
                        width: 3536060142061796919,
                      },
                      top: {
                        color: {
                          alpha: 53.099998,
                          blue: 75.199997,
                          green: 9.100000,
                          red: 84.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 9.200000,
                            blue: 89.099998,
                            green: 41.099998,
                            red: 27.100000,
                          },
                          themeColor: "ACCENT5",
                        },
                        style: "SOLID",
                        width: 4006730569112212497,
                      },
                    },
                    horizontalAlignment: "RIGHT",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "et",
                      type: "DATE",
                    },
                    padding: {
                      bottom: 1701966261962493918,
                      left: 251719755234862468,
                      right: 7575127180854019924,
                      top: 7175597313363046488,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "libero",
                      fontSize: 2542357850323793500,
                      foregroundColor: {
                        alpha: 32.200001,
                        blue: 91.199997,
                        green: 44.200001,
                        red: 42.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 99.099998,
                          blue: 73.099998,
                          green: 67.199997,
                          red: 80.199997,
                        },
                        themeColor: "LINK",
                      },
                      italic: false,
                      link: {
                        uri: "reiciendis",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    textRotation: {
                      angle: 6346911035553369201,
                      vertical: true,
                    },
                    verticalAlignment: "TOP",
                    wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
                  },
                  effectiveValue: {
                    boolValue: false,
                    errorValue: {
                      message: "vero",
                      type: "REF",
                    },
                    formulaValue: "voluptates",
                    numberValue: 50.099998,
                    stringValue: "quae",
                  },
                  formattedValue: "maxime",
                  hyperlink: "sunt",
                  note: "et",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "beatae",
                        },
                        groupLimit: {
                          applyOrder: 2324562449978489393,
                          countLimit: 9189738440177523732,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH",
                          },
                          histogramRule: {
                            end: 90.199997,
                            interval: 99.099998,
                            start: 69.199997,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "quos",
                                    type: "NUM",
                                  },
                                  formulaValue: "reiciendis",
                                  numberValue: 15.200000,
                                  stringValue: "consequatur",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "non",
                                      type: "REF",
                                    },
                                    formulaValue: "perspiciatis",
                                    numberValue: 25.200001,
                                    stringValue: "itaque",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "labore",
                                      type: "LOADING",
                                    },
                                    formulaValue: "ab",
                                    numberValue: 54.200001,
                                    stringValue: "esse",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "dicta",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "sit",
                                    numberValue: 35.200001,
                                    stringValue: "nemo",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "culpa",
                                    type: "NUM",
                                  },
                                  formulaValue: "vero",
                                  numberValue: 8.200000,
                                  stringValue: "et",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "fugit",
                                      type: "NUM",
                                    },
                                    formulaValue: "provident",
                                    numberValue: 96.099998,
                                    stringValue: "vitae",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "minima",
                                      type: "LOADING",
                                    },
                                    formulaValue: "maiores",
                                    numberValue: 98.099998,
                                    stringValue: "aliquid",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "ipsam",
                                    type: "LOADING",
                                  },
                                  formulaValue: "eos",
                                  numberValue: 19.100000,
                                  stringValue: "laborum",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "qui",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "quo",
                                    numberValue: 83.199997,
                                    stringValue: "consequuntur",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "ab",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "autem",
                                    numberValue: 73.199997,
                                    stringValue: "libero",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "nostrum",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 4116532852394875266,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "facilis",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "placeat",
                              numberValue: 50.200001,
                              stringValue: "mollitia",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "repellendus",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "nesciunt",
                              numberValue: 43.200001,
                              stringValue: "dolores",
                            },
                          ],
                          valuesIndex: 2080254841037912013,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "deleniti",
                                type: "LOADING",
                              },
                              formulaValue: "non",
                              numberValue: 72.099998,
                              stringValue: "cumque",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "vero",
                        },
                        groupLimit: {
                          applyOrder: 7809552944400792573,
                          countLimit: 8159368964716984828,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_MONTH",
                          },
                          histogramRule: {
                            end: 26.100000,
                            interval: 9.100000,
                            start: 48.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "vel",
                                    type: "NUM",
                                  },
                                  formulaValue: "minus",
                                  numberValue: 5.200000,
                                  stringValue: "nihil",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "tenetur",
                                      type: "ERROR",
                                    },
                                    formulaValue: "dicta",
                                    numberValue: 52.099998,
                                    stringValue: "perferendis",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "minus",
                                      type: "NAME",
                                    },
                                    formulaValue: "voluptate",
                                    numberValue: 59.200001,
                                    stringValue: "voluptatem",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "corrupti",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "quaerat",
                                    numberValue: 41.200001,
                                    stringValue: "et",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "dolorum",
                                    type: "ERROR",
                                  },
                                  formulaValue: "nihil",
                                  numberValue: 64.099998,
                                  stringValue: "nesciunt",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "voluptatem",
                                      type: "ERROR",
                                    },
                                    formulaValue: "et",
                                    numberValue: 55.099998,
                                    stringValue: "aliquam",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "distinctio",
                                      type: "N_A",
                                    },
                                    formulaValue: "similique",
                                    numberValue: 5.200000,
                                    stringValue: "nobis",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "deserunt",
                                      type: "VALUE",
                                    },
                                    formulaValue: "explicabo",
                                    numberValue: 45.099998,
                                    stringValue: "sequi",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "enim",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 8077715595025050482,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "dolore",
                                type: "ERROR",
                              },
                              formulaValue: "deserunt",
                              numberValue: 71.199997,
                              stringValue: "tempore",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "et",
                                type: "REF",
                              },
                              formulaValue: "nihil",
                              numberValue: 22.200001,
                              stringValue: "velit",
                            },
                          ],
                          valuesIndex: 2136048282350520950,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "sunt",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "possimus",
                              numberValue: 63.200001,
                              stringValue: "velit",
                            },
                          },
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "maxime",
                                type: "REF",
                              },
                              formulaValue: "dolorem",
                              numberValue: 62.099998,
                              stringValue: "at",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "reiciendis": {
                        condition: {
                          type: "TEXT_EQ",
                          values: [
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "ut",
                            },
                            {
                              relativeDate: "PAST_YEAR",
                              userEnteredValue: "ab",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "consequatur",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "OTHER",
                      errorMessage: "quaerat",
                      lastRefreshTime: "nesciunt",
                      state: "RUNNING",
                    },
                    dataSourceId: "non",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 343192208240672808,
                        dataSourceColumnReference: {
                          name: "quis",
                        },
                        filterCriteria: {
                          condition: {
                            type: "DATE_AFTER",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "error",
                              },
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "perferendis",
                              },
                              {
                                relativeDate: "YESTERDAY",
                                userEnteredValue: "occaecati",
                              },
                            ],
                          },
                          visibleByDefault: false,
                          visibleValues: [
                            "quae",
                            "excepturi",
                            "vitae",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "possimus",
                        },
                        groupLimit: {
                          applyOrder: 2652712139782830225,
                          countLimit: 6058246962682330659,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "HOUR_MINUTE",
                          },
                          histogramRule: {
                            end: 1.200000,
                            interval: 94.099998,
                            start: 0.100000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "eum",
                                    type: "REF",
                                  },
                                  formulaValue: "voluptatibus",
                                  numberValue: 81.099998,
                                  stringValue: "assumenda",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "reprehenderit",
                                      type: "NAME",
                                    },
                                    formulaValue: "neque",
                                    numberValue: 5.200000,
                                    stringValue: "ipsam",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "unde",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 452133152038006144,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "voluptate",
                                type: "LOADING",
                              },
                              formulaValue: "dolorem",
                              numberValue: 73.199997,
                              stringValue: "est",
                            },
                          ],
                          valuesIndex: 6020775106069891265,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "qui",
                                type: "NAME",
                              },
                              formulaValue: "sit",
                              numberValue: 32.200001,
                              stringValue: "ullam",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "quis",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "sit",
                              numberValue: 75.199997,
                              stringValue: "quod",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "esse",
                                type: "N_A",
                              },
                              formulaValue: "tenetur",
                              numberValue: 17.100000,
                              stringValue: "dolores",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "pariatur",
                        },
                        groupLimit: {
                          applyOrder: 8173071863607207149,
                          countLimit: 6849791631000282255,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DATE_TIME_RULE_TYPE_UNSPECIFIED",
                          },
                          histogramRule: {
                            end: 65.199997,
                            interval: 36.200001,
                            start: 89.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "ea",
                                    type: "ERROR_TYPE_UNSPECIFIED",
                                  },
                                  formulaValue: "similique",
                                  numberValue: 82.199997,
                                  stringValue: "est",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "et",
                                      type: "REF",
                                    },
                                    formulaValue: "placeat",
                                    numberValue: 14.200000,
                                    stringValue: "molestiae",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "veritatis",
                                      type: "LOADING",
                                    },
                                    formulaValue: "ipsum",
                                    numberValue: 17.100000,
                                    stringValue: "adipisci",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "velit",
                                      type: "DIVIDE_BY_ZERO",
                                    },
                                    formulaValue: "incidunt",
                                    numberValue: 78.099998,
                                    stringValue: "velit",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "sapiente",
                                    type: "N_A",
                                  },
                                  formulaValue: "dolor",
                                  numberValue: 21.100000,
                                  stringValue: "quo",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "voluptas",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "dolores",
                                    numberValue: 28.200001,
                                    stringValue: "dignissimos",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "reiciendis",
                                    type: "REF",
                                  },
                                  formulaValue: "voluptate",
                                  numberValue: 67.099998,
                                  stringValue: "sunt",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "ullam",
                                      type: "NULL_VALUE",
                                    },
                                    formulaValue: "nam",
                                    numberValue: 23.200001,
                                    stringValue: "exercitationem",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "et",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 1139111609405628036,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "sapiente",
                                type: "DIVIDE_BY_ZERO",
                              },
                              formulaValue: "iure",
                              numberValue: 69.099998,
                              stringValue: "cum",
                            },
                          ],
                          valuesIndex: 6391959488955227187,
                        },
                        valueMetadata: [
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "odio",
                                type: "ERROR",
                              },
                              formulaValue: "labore",
                              numberValue: 12.200000,
                              stringValue: "molestias",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "vero",
                                type: "NAME",
                              },
                              formulaValue: "blanditiis",
                              numberValue: 12.100000,
                              stringValue: "est",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 4724580932323870376,
                      endRowIndex: 5704640009984937627,
                      sheetId: 126907897928319886,
                      startColumnIndex: 4274130889709757066,
                      startRowIndex: 4715466942774737856,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "nemo",
                        },
                        formula: "laborum",
                        name: "molestias",
                        sourceColumnOffset: 2467764531831227751,
                        summarizeFunction: "PRODUCT",
                      },
                      {
                        calculatedDisplayType: "PIVOT_VALUE_CALCULATED_DISPLAY_TYPE_UNSPECIFIED",
                        dataSourceColumnReference: {
                          name: "vero",
                        },
                        formula: "dolor",
                        name: "eligendi",
                        sourceColumnOffset: 3405792494215086959,
                        summarizeFunction: "COUNTA",
                      },
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "laboriosam",
                        },
                        formula: "nisi",
                        name: "iste",
                        sourceColumnOffset: 3280036500610443897,
                        summarizeFunction: "VAR",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "officia",
                        fontSize: 7748152195837793501,
                        foregroundColor: {
                          alpha: 88.199997,
                          blue: 60.200001,
                          green: 46.099998,
                          red: 11.100000,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 32.099998,
                            blue: 87.199997,
                            green: 70.099998,
                            red: 7.200000,
                          },
                          themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                        },
                        italic: false,
                        link: {
                          uri: "nobis",
                        },
                        strikethrough: true,
                        underline: false,
                      },
                      startIndex: 4815301423935195669,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 79.099998,
                      blue: 54.200001,
                      green: 68.099998,
                      red: 44.099998,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 99.099998,
                        blue: 5.100000,
                        green: 30.100000,
                        red: 38.099998,
                      },
                      themeColor: "ACCENT3",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 66.199997,
                          blue: 27.200001,
                          green: 67.099998,
                          red: 6.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 90.099998,
                            blue: 95.199997,
                            green: 29.200001,
                            red: 9.100000,
                          },
                          themeColor: "BACKGROUND",
                        },
                        style: "SOLID",
                        width: 1393340971033990238,
                      },
                      left: {
                        color: {
                          alpha: 34.099998,
                          blue: 40.099998,
                          green: 22.200001,
                          red: 10.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 66.099998,
                            blue: 97.199997,
                            green: 32.099998,
                            red: 11.200000,
                          },
                          themeColor: "LINK",
                        },
                        style: "SOLID_MEDIUM",
                        width: 4029960169457115204,
                      },
                      right: {
                        color: {
                          alpha: 34.200001,
                          blue: 46.099998,
                          green: 44.200001,
                          red: 84.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 19.100000,
                            blue: 41.099998,
                            green: 95.199997,
                            red: 21.200001,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "SOLID_THICK",
                        width: 2222519217085633734,
                      },
                      top: {
                        color: {
                          alpha: 80.199997,
                          blue: 59.200001,
                          green: 33.099998,
                          red: 17.200001,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 40.200001,
                            blue: 60.099998,
                            green: 20.100000,
                            red: 81.099998,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "SOLID_THICK",
                        width: 5843694163311321961,
                      },
                    },
                    horizontalAlignment: "LEFT",
                    hyperlinkDisplayType: "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED",
                    numberFormat: {
                      pattern: "praesentium",
                      type: "NUMBER_FORMAT_TYPE_UNSPECIFIED",
                    },
                    padding: {
                      bottom: 7973836750495698472,
                      left: 2348788550574367046,
                      right: 4606870595759523674,
                      top: 7173540058746352250,
                    },
                    textDirection: "LEFT_TO_RIGHT",
                    textFormat: {
                      bold: true,
                      fontFamily: "expedita",
                      fontSize: 2029328151637899967,
                      foregroundColor: {
                        alpha: 94.199997,
                        blue: 36.099998,
                        green: 79.199997,
                        red: 68.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 1.200000,
                          blue: 88.099998,
                          green: 34.200001,
                          red: 71.199997,
                        },
                        themeColor: "LINK",
                      },
                      italic: true,
                      link: {
                        uri: "voluptatem",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    textRotation: {
                      angle: 3708703662519297744,
                      vertical: true,
                    },
                    verticalAlignment: "VERTICAL_ALIGN_UNSPECIFIED",
                    wrapStrategy: "LEGACY_WRAP",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "corporis",
                      type: "NUM",
                    },
                    formulaValue: "quia",
                    numberValue: 31.100000,
                    stringValue: "quasi",
                  },
                },
                {
                  dataSourceFormula: {
                    dataExecutionStatus: {
                      errorCode: "MISSING_COLUMN_ALIAS",
                      errorMessage: "quidem",
                      lastRefreshTime: "rerum",
                      state: "NOT_STARTED",
                    },
                    dataSourceId: "sed",
                  },
                  dataSourceTable: {
                    columnSelectionType: "SELECTED",
                    columns: [
                      {
                        name: "provident",
                      },
                    ],
                    dataExecutionStatus: {
                      errorCode: "ENGINE",
                      errorMessage: "id",
                      lastRefreshTime: "libero",
                      state: "RUNNING",
                    },
                    dataSourceId: "voluptatem",
                    filterSpecs: [
                      {
                        columnIndex: 6556169590266895662,
                        dataSourceColumnReference: {
                          name: "perferendis",
                        },
                        filterCriteria: {
                          condition: {
                            type: "ONE_OF_RANGE",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "suscipit",
                              },
                            ],
                          },
                          hiddenValues: [
                            "omnis",
                          ],
                          visibleBackgroundColor: {
                            alpha: 2.200000,
                            blue: 89.099998,
                            green: 78.199997,
                            red: 94.099998,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 52.200001,
                              blue: 57.200001,
                              green: 3.200000,
                              red: 64.099998,
                            },
                            themeColor: "ACCENT2",
                          },
                          visibleForegroundColor: {
                            alpha: 34.200001,
                            blue: 4.100000,
                            green: 27.100000,
                            red: 26.200001,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 84.099998,
                              blue: 80.199997,
                              green: 19.200001,
                              red: 69.099998,
                            },
                            themeColor: "BACKGROUND",
                          },
                        },
                      },
                      {
                        columnIndex: 6140403004682355221,
                        dataSourceColumnReference: {
                          name: "recusandae",
                        },
                        filterCriteria: {
                          condition: {
                            type: "ONE_OF_RANGE",
                            values: [
                              {
                                relativeDate: "PAST_YEAR",
                                userEnteredValue: "ea",
                              },
                            ],
                          },
                          hiddenValues: [
                            "voluptate",
                            "alias",
                            "quisquam",
                          ],
                          visibleBackgroundColor: {
                            alpha: 5.100000,
                            blue: 30.200001,
                            green: 24.200001,
                            red: 6.100000,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 99.099998,
                              blue: 41.200001,
                              green: 22.200001,
                              red: 42.200001,
                            },
                            themeColor: "TEXT",
                          },
                          visibleForegroundColor: {
                            alpha: 85.199997,
                            blue: 85.199997,
                            green: 41.099998,
                            red: 69.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 9.200000,
                              blue: 56.200001,
                              green: 95.099998,
                              red: 83.099998,
                            },
                            themeColor: "ACCENT1",
                          },
                        },
                      },
                      {
                        columnIndex: 8298215233958832177,
                        dataSourceColumnReference: {
                          name: "veniam",
                        },
                        filterCriteria: {
                          condition: {
                            type: "TEXT_STARTS_WITH",
                            values: [
                              {
                                relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                                userEnteredValue: "repellat",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "expedita",
                              },
                              {
                                relativeDate: "PAST_WEEK",
                                userEnteredValue: "debitis",
                              },
                            ],
                          },
                          hiddenValues: [
                            "tempore",
                            "temporibus",
                            "sed",
                          ],
                          visibleBackgroundColor: {
                            alpha: 27.200001,
                            blue: 38.200001,
                            green: 69.099998,
                            red: 15.200000,
                          },
                          visibleBackgroundColorStyle: {
                            rgbColor: {
                              alpha: 91.199997,
                              blue: 83.099998,
                              green: 39.200001,
                              red: 12.200000,
                            },
                            themeColor: "TEXT",
                          },
                          visibleForegroundColor: {
                            alpha: 88.099998,
                            blue: 95.099998,
                            green: 63.099998,
                            red: 92.099998,
                          },
                          visibleForegroundColorStyle: {
                            rgbColor: {
                              alpha: 7.200000,
                              blue: 42.099998,
                              green: 79.199997,
                              red: 35.099998,
                            },
                            themeColor: "BACKGROUND",
                          },
                        },
                      },
                    ],
                    rowLimit: 287329858593185451,
                    sortSpecs: [
                      {
                        backgroundColor: {
                          alpha: 79.099998,
                          blue: 26.100000,
                          green: 52.200001,
                          red: 75.199997,
                        },
                        backgroundColorStyle: {
                          rgbColor: {
                            alpha: 14.100000,
                            blue: 14.200000,
                            green: 63.099998,
                            red: 15.200000,
                          },
                          themeColor: "ACCENT6",
                        },
                        dataSourceColumnReference: {
                          name: "esse",
                        },
                        dimensionIndex: 5106846861180820730,
                        foregroundColor: {
                          alpha: 94.199997,
                          blue: 52.200001,
                          green: 82.099998,
                          red: 41.200001,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 58.099998,
                            blue: 41.099998,
                            green: 58.099998,
                            red: 74.199997,
                          },
                          themeColor: "LINK",
                        },
                        sortOrder: "ASCENDING",
                      },
                    ],
                  },
                  dataValidation: {
                    condition: {
                      type: "NUMBER_LESS_THAN_EQ",
                      values: [
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "perspiciatis",
                        },
                        {
                          relativeDate: "PAST_MONTH",
                          userEnteredValue: "aspernatur",
                        },
                        {
                          relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                          userEnteredValue: "temporibus",
                        },
                      ],
                    },
                    inputMessage: "sunt",
                    showCustomUi: true,
                    strict: true,
                  },
                  effectiveFormat: {
                    backgroundColor: {
                      alpha: 43.200001,
                      blue: 86.199997,
                      green: 61.200001,
                      red: 2.200000,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 57.200001,
                        blue: 40.200001,
                        green: 19.200001,
                        red: 28.100000,
                      },
                      themeColor: "ACCENT1",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 14.100000,
                          blue: 29.100000,
                          green: 26.200001,
                          red: 71.199997,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 64.099998,
                            blue: 92.099998,
                            green: 66.099998,
                            red: 78.099998,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "DOUBLE",
                        width: 5751894501702030433,
                      },
                      left: {
                        color: {
                          alpha: 7.200000,
                          blue: 75.099998,
                          green: 89.099998,
                          red: 75.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 32.200001,
                            blue: 70.199997,
                            green: 86.199997,
                            red: 27.200001,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "SOLID",
                        width: 2930867207851589103,
                      },
                      right: {
                        color: {
                          alpha: 80.099998,
                          blue: 63.200001,
                          green: 30.100000,
                          red: 98.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 20.200001,
                            blue: 46.099998,
                            green: 36.200001,
                            red: 7.200000,
                          },
                          themeColor: "LINK",
                        },
                        style: "DOTTED",
                        width: 2531386225754896036,
                      },
                      top: {
                        color: {
                          alpha: 54.099998,
                          blue: 77.199997,
                          green: 46.099998,
                          red: 99.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 19.100000,
                            blue: 23.100000,
                            green: 26.100000,
                            red: 69.199997,
                          },
                          themeColor: "ACCENT4",
                        },
                        style: "SOLID_THICK",
                        width: 9217081752679061384,
                      },
                    },
                    horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                    hyperlinkDisplayType: "LINKED",
                    numberFormat: {
                      pattern: "aliquid",
                      type: "PERCENT",
                    },
                    padding: {
                      bottom: 7489582293398995831,
                      left: 8644884869250691615,
                      right: 8415341192666062471,
                      top: 4264483594071628551,
                    },
                    textDirection: "LEFT_TO_RIGHT",
                    textFormat: {
                      bold: true,
                      fontFamily: "voluptas",
                      fontSize: 5298523557623465116,
                      foregroundColor: {
                        alpha: 52.200001,
                        blue: 49.200001,
                        green: 31.200001,
                        red: 64.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 59.200001,
                          blue: 91.099998,
                          green: 62.099998,
                          red: 45.200001,
                        },
                        themeColor: "BACKGROUND",
                      },
                      italic: false,
                      link: {
                        uri: "aut",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    textRotation: {
                      angle: 3904303977314123066,
                      vertical: true,
                    },
                    verticalAlignment: "MIDDLE",
                    wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
                  },
                  effectiveValue: {
                    boolValue: false,
                    errorValue: {
                      message: "architecto",
                      type: "NAME",
                    },
                    formulaValue: "est",
                    numberValue: 1.100000,
                    stringValue: "quas",
                  },
                  formattedValue: "rem",
                  hyperlink: "et",
                  note: "ipsum",
                  pivotTable: {
                    columns: [
                      {
                        dataSourceColumnReference: {
                          name: "et",
                        },
                        groupLimit: {
                          applyOrder: 6100849654677035984,
                          countLimit: 6158487227327240736,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_WEEK",
                          },
                          histogramRule: {
                            end: 27.200001,
                            interval: 97.199997,
                            start: 78.099998,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "odio",
                                    type: "ERROR",
                                  },
                                  formulaValue: "ut",
                                  numberValue: 59.099998,
                                  stringValue: "esse",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "quam",
                                      type: "ERROR",
                                    },
                                    formulaValue: "necessitatibus",
                                    numberValue: 42.200001,
                                    stringValue: "tempore",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "qui",
                                    type: "LOADING",
                                  },
                                  formulaValue: "consectetur",
                                  numberValue: 90.099998,
                                  stringValue: "autem",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "dolor",
                                      type: "NAME",
                                    },
                                    formulaValue: "sint",
                                    numberValue: 36.099998,
                                    stringValue: "aliquam",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "consequatur",
                                      type: "NAME",
                                    },
                                    formulaValue: "totam",
                                    numberValue: 35.200001,
                                    stringValue: "tenetur",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "modi",
                                      type: "REF",
                                    },
                                    formulaValue: "fuga",
                                    numberValue: 58.200001,
                                    stringValue: "voluptatem",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "architecto",
                                    type: "DIVIDE_BY_ZERO",
                                  },
                                  formulaValue: "ipsa",
                                  numberValue: 71.199997,
                                  stringValue: "debitis",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "quia",
                                      type: "NAME",
                                    },
                                    formulaValue: "totam",
                                    numberValue: 27.200001,
                                    stringValue: "reprehenderit",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "ducimus",
                        repeatHeadings: true,
                        showTotals: false,
                        sortOrder: "SORT_ORDER_UNSPECIFIED",
                        sourceColumnOffset: 2493694374913398430,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "eum",
                                type: "ERROR",
                              },
                              formulaValue: "tempora",
                              numberValue: 15.100000,
                              stringValue: "sunt",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "qui",
                                type: "ERROR_TYPE_UNSPECIFIED",
                              },
                              formulaValue: "dolores",
                              numberValue: 9.200000,
                              stringValue: "eum",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "neque",
                                type: "NAME",
                              },
                              formulaValue: "veniam",
                              numberValue: 17.200001,
                              stringValue: "fugiat",
                            },
                          ],
                          valuesIndex: 6922177003739831708,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "iure",
                                type: "NULL_VALUE",
                              },
                              formulaValue: "enim",
                              numberValue: 12.100000,
                              stringValue: "dolorem",
                            },
                          },
                        ],
                      },
                      {
                        dataSourceColumnReference: {
                          name: "accusamus",
                        },
                        groupLimit: {
                          applyOrder: 250810333019958541,
                          countLimit: 7061706329534283792,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "YEAR_QUARTER",
                          },
                          histogramRule: {
                            end: 19.200001,
                            interval: 39.200001,
                            start: 22.200001,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "tempora",
                                    type: "N_A",
                                  },
                                  formulaValue: "architecto",
                                  numberValue: 69.099998,
                                  stringValue: "vero",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "et",
                                      type: "ERROR",
                                    },
                                    formulaValue: "autem",
                                    numberValue: 90.199997,
                                    stringValue: "debitis",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "officia",
                                      type: "ERROR",
                                    },
                                    formulaValue: "libero",
                                    numberValue: 31.200001,
                                    stringValue: "dignissimos",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "est",
                                    type: "NULL_VALUE",
                                  },
                                  formulaValue: "modi",
                                  numberValue: 92.099998,
                                  stringValue: "quibusdam",
                                },
                                items: [
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "beatae",
                                      type: "N_A",
                                    },
                                    formulaValue: "consequatur",
                                    numberValue: 56.099998,
                                    stringValue: "architecto",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "placeat",
                                      type: "REF",
                                    },
                                    formulaValue: "excepturi",
                                    numberValue: 57.099998,
                                    stringValue: "omnis",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "totam",
                        repeatHeadings: false,
                        showTotals: false,
                        sortOrder: "ASCENDING",
                        sourceColumnOffset: 1373605424383008935,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: true,
                              errorValue: {
                                message: "delectus",
                                type: "NAME",
                              },
                              formulaValue: "minima",
                              numberValue: 72.199997,
                              stringValue: "nemo",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "nulla",
                                type: "ERROR",
                              },
                              formulaValue: "possimus",
                              numberValue: 21.200001,
                              stringValue: "ut",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "voluptas",
                                type: "ERROR",
                              },
                              formulaValue: "possimus",
                              numberValue: 32.200001,
                              stringValue: "consequuntur",
                            },
                          ],
                          valuesIndex: 6056467764692009519,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "officia",
                                type: "NAME",
                              },
                              formulaValue: "at",
                              numberValue: 69.099998,
                              stringValue: "dolor",
                            },
                          },
                        ],
                      },
                    ],
                    criteria: {
                      "atque": {
                        condition: {
                          type: "NUMBER_BETWEEN",
                          values: [
                            {
                              relativeDate: "TOMORROW",
                              userEnteredValue: "minima",
                            },
                            {
                              relativeDate: "PAST_WEEK",
                              userEnteredValue: "nisi",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "nemo",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "dignissimos",
                          "maiores",
                        ],
                      },
                      "animi": {
                        condition: {
                          type: "TEXT_NOT_CONTAINS",
                          values: [
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "dolorem",
                            },
                            {
                              relativeDate: "PAST_YEAR",
                              userEnteredValue: "sed",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "in",
                            },
                          ],
                        },
                        visibleByDefault: false,
                        visibleValues: [
                          "quis",
                          "labore",
                          "rerum",
                        ],
                      },
                      "ea": {
                        condition: {
                          type: "NUMBER_LESS",
                          values: [
                            {
                              relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                              userEnteredValue: "id",
                            },
                            {
                              relativeDate: "PAST_MONTH",
                              userEnteredValue: "est",
                            },
                          ],
                        },
                        visibleByDefault: true,
                        visibleValues: [
                          "iste",
                        ],
                      },
                    },
                    dataExecutionStatus: {
                      errorCode: "DATA_EXECUTION_ERROR_CODE_UNSPECIFIED",
                      errorMessage: "rem",
                      lastRefreshTime: "sit",
                      state: "NOT_STARTED",
                    },
                    dataSourceId: "cupiditate",
                    filterSpecs: [
                      {
                        columnOffsetIndex: 2537728171137142569,
                        dataSourceColumnReference: {
                          name: "odit",
                        },
                        filterCriteria: {
                          condition: {
                            type: "NUMBER_LESS",
                            values: [
                              {
                                relativeDate: "PAST_MONTH",
                                userEnteredValue: "accusantium",
                              },
                            ],
                          },
                          visibleByDefault: true,
                          visibleValues: [
                            "voluptas",
                            "saepe",
                            "numquam",
                          ],
                        },
                      },
                    ],
                    rows: [
                      {
                        dataSourceColumnReference: {
                          name: "molestias",
                        },
                        groupLimit: {
                          applyOrder: 688276316837836642,
                          countLimit: 5106010001859557921,
                        },
                        groupRule: {
                          dateTimeRule: {
                            type: "DAY_OF_YEAR",
                          },
                          histogramRule: {
                            end: 33.099998,
                            interval: 41.099998,
                            start: 4.200000,
                          },
                          manualRule: {
                            groups: [
                              {
                                groupName: {
                                  boolValue: true,
                                  errorValue: {
                                    message: "fuga",
                                    type: "ERROR",
                                  },
                                  formulaValue: "suscipit",
                                  numberValue: 45.200001,
                                  stringValue: "eveniet",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "praesentium",
                                      type: "LOADING",
                                    },
                                    formulaValue: "corrupti",
                                    numberValue: 46.099998,
                                    stringValue: "sit",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "sunt",
                                      type: "ERROR_TYPE_UNSPECIFIED",
                                    },
                                    formulaValue: "et",
                                    numberValue: 18.200001,
                                    stringValue: "eaque",
                                  },
                                ],
                              },
                              {
                                groupName: {
                                  boolValue: false,
                                  errorValue: {
                                    message: "assumenda",
                                    type: "NAME",
                                  },
                                  formulaValue: "nihil",
                                  numberValue: 13.100000,
                                  stringValue: "quia",
                                },
                                items: [
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "perspiciatis",
                                      type: "LOADING",
                                    },
                                    formulaValue: "voluptas",
                                    numberValue: 93.099998,
                                    stringValue: "perspiciatis",
                                  },
                                  {
                                    boolValue: false,
                                    errorValue: {
                                      message: "iure",
                                      type: "NUM",
                                    },
                                    formulaValue: "tempora",
                                    numberValue: 90.099998,
                                    stringValue: "rerum",
                                  },
                                  {
                                    boolValue: true,
                                    errorValue: {
                                      message: "soluta",
                                      type: "VALUE",
                                    },
                                    formulaValue: "debitis",
                                    numberValue: 81.199997,
                                    stringValue: "molestiae",
                                  },
                                ],
                              },
                            ],
                          },
                        },
                        label: "rem",
                        repeatHeadings: false,
                        showTotals: true,
                        sortOrder: "DESCENDING",
                        sourceColumnOffset: 562186976755496207,
                        valueBucket: {
                          buckets: [
                            {
                              boolValue: false,
                              errorValue: {
                                message: "voluptatem",
                                type: "REF",
                              },
                              formulaValue: "veniam",
                              numberValue: 94.099998,
                              stringValue: "debitis",
                            },
                            {
                              boolValue: true,
                              errorValue: {
                                message: "voluptatem",
                                type: "NUM",
                              },
                              formulaValue: "quae",
                              numberValue: 95.199997,
                              stringValue: "eveniet",
                            },
                            {
                              boolValue: false,
                              errorValue: {
                                message: "eos",
                                type: "VALUE",
                              },
                              formulaValue: "nihil",
                              numberValue: 36.099998,
                              stringValue: "adipisci",
                            },
                          ],
                          valuesIndex: 3087297326002441367,
                        },
                        valueMetadata: [
                          {
                            collapsed: true,
                            value: {
                              boolValue: false,
                              errorValue: {
                                message: "consequatur",
                                type: "VALUE",
                              },
                              formulaValue: "eaque",
                              numberValue: 18.100000,
                              stringValue: "alias",
                            },
                          },
                          {
                            collapsed: false,
                            value: {
                              boolValue: true,
                              errorValue: {
                                message: "aut",
                                type: "REF",
                              },
                              formulaValue: "itaque",
                              numberValue: 83.199997,
                              stringValue: "inventore",
                            },
                          },
                        ],
                      },
                    ],
                    source: {
                      endColumnIndex: 7193004273159542540,
                      endRowIndex: 7529475414872028413,
                      sheetId: 1068958341451214076,
                      startColumnIndex: 8588413442057463332,
                      startRowIndex: 4065453152778680060,
                    },
                    valueLayout: "HORIZONTAL",
                    values: [
                      {
                        calculatedDisplayType: "PERCENT_OF_COLUMN_TOTAL",
                        dataSourceColumnReference: {
                          name: "quia",
                        },
                        formula: "illo",
                        name: "aliquid",
                        sourceColumnOffset: 4465773179614496472,
                        summarizeFunction: "MAX",
                      },
                    ],
                  },
                  textFormatRuns: [
                    {
                      format: {
                        bold: true,
                        fontFamily: "aspernatur",
                        fontSize: 338304818009365643,
                        foregroundColor: {
                          alpha: 37.099998,
                          blue: 6.200000,
                          green: 22.100000,
                          red: 81.199997,
                        },
                        foregroundColorStyle: {
                          rgbColor: {
                            alpha: 7.200000,
                            blue: 78.099998,
                            green: 1.100000,
                            red: 70.099998,
                          },
                          themeColor: "BACKGROUND",
                        },
                        italic: false,
                        link: {
                          uri: "in",
                        },
                        strikethrough: true,
                        underline: true,
                      },
                      startIndex: 5694007335676361459,
                    },
                  ],
                  userEnteredFormat: {
                    backgroundColor: {
                      alpha: 67.099998,
                      blue: 53.200001,
                      green: 54.099998,
                      red: 30.200001,
                    },
                    backgroundColorStyle: {
                      rgbColor: {
                        alpha: 2.100000,
                        blue: 54.099998,
                        green: 18.100000,
                        red: 37.200001,
                      },
                      themeColor: "ACCENT1",
                    },
                    borders: {
                      bottom: {
                        color: {
                          alpha: 91.099998,
                          blue: 99.099998,
                          green: 23.200001,
                          red: 1.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 42.099998,
                            blue: 6.200000,
                            green: 19.100000,
                            red: 25.200001,
                          },
                          themeColor: "ACCENT2",
                        },
                        style: "DOUBLE",
                        width: 3751759223171332295,
                      },
                      left: {
                        color: {
                          alpha: 19.200001,
                          blue: 39.099998,
                          green: 50.099998,
                          red: 47.099998,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 83.199997,
                            blue: 12.200000,
                            green: 99.099998,
                            red: 71.099998,
                          },
                          themeColor: "ACCENT6",
                        },
                        style: "NONE",
                        width: 7053343931218850453,
                      },
                      right: {
                        color: {
                          alpha: 68.199997,
                          blue: 12.200000,
                          green: 62.200001,
                          red: 0.200000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 98.099998,
                            blue: 66.199997,
                            green: 77.099998,
                            red: 72.199997,
                          },
                          themeColor: "ACCENT3",
                        },
                        style: "SOLID_MEDIUM",
                        width: 4895608049175265481,
                      },
                      top: {
                        color: {
                          alpha: 81.099998,
                          blue: 76.099998,
                          green: 43.200001,
                          red: 22.100000,
                        },
                        colorStyle: {
                          rgbColor: {
                            alpha: 59.099998,
                            blue: 96.199997,
                            green: 12.100000,
                            red: 68.099998,
                          },
                          themeColor: "ACCENT1",
                        },
                        style: "SOLID",
                        width: 4105566360598636477,
                      },
                    },
                    horizontalAlignment: "CENTER",
                    hyperlinkDisplayType: "PLAIN_TEXT",
                    numberFormat: {
                      pattern: "et",
                      type: "SCIENTIFIC",
                    },
                    padding: {
                      bottom: 5719147461426391913,
                      left: 5812685830567536010,
                      right: 528565635287720882,
                      top: 914292257469771118,
                    },
                    textDirection: "TEXT_DIRECTION_UNSPECIFIED",
                    textFormat: {
                      bold: false,
                      fontFamily: "dolores",
                      fontSize: 832793571456429373,
                      foregroundColor: {
                        alpha: 27.200001,
                        blue: 85.199997,
                        green: 31.100000,
                        red: 64.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 20.100000,
                          blue: 10.200000,
                          green: 76.199997,
                          red: 90.199997,
                        },
                        themeColor: "ACCENT5",
                      },
                      italic: false,
                      link: {
                        uri: "possimus",
                      },
                      strikethrough: false,
                      underline: false,
                    },
                    textRotation: {
                      angle: 7975628792615248684,
                      vertical: false,
                    },
                    verticalAlignment: "MIDDLE",
                    wrapStrategy: "WRAP",
                  },
                  userEnteredValue: {
                    boolValue: true,
                    errorValue: {
                      message: "a",
                      type: "LOADING",
                    },
                    formulaValue: "blanditiis",
                    numberValue: 36.200001,
                    stringValue: "saepe",
                  },
                },
              ],
            },
          ],
          start: {
            columnIndex: 7002824972063302422,
            rowIndex: 3300432874897478129,
            sheetId: 8115972163679695027,
          },
        },
        updateChartSpec: {
          chartId: 5713875169114000492,
          spec: {
            altText: "repellat",
            backgroundColor: {
              alpha: 40.099998,
              blue: 15.200000,
              green: 70.199997,
              red: 12.200000,
            },
            backgroundColorStyle: {
              rgbColor: {
                alpha: 35.099998,
                blue: 90.199997,
                green: 90.199997,
                red: 29.200001,
              },
              themeColor: "ACCENT6",
            },
            basicChart: {
              axis: [
                {
                  format: {
                    bold: false,
                    fontFamily: "officiis",
                    fontSize: 3568118960736463348,
                    foregroundColor: {
                      alpha: 95.199997,
                      blue: 12.200000,
                      green: 84.199997,
                      red: 19.100000,
                    },
                    foregroundColorStyle: {
                      rgbColor: {
                        alpha: 8.100000,
                        blue: 48.200001,
                        green: 98.199997,
                        red: 40.099998,
                      },
                      themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                    },
                    italic: true,
                    link: {
                      uri: "eligendi",
                    },
                    strikethrough: false,
                    underline: false,
                  },
                  position: "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
                  title: "eos",
                  titleTextPosition: {
                    horizontalAlignment: "RIGHT",
                  },
                  viewWindowOptions: {
                    viewWindowMax: 76.099998,
                    viewWindowMin: 76.199997,
                    viewWindowMode: "PRETTY",
                  },
                },
              ],
              chartType: "SCATTER",
              compareMode: "DATUM",
              domains: [
                {
                  domain: {
                    aggregateType: "AVERAGE",
                    columnReference: {
                      name: "autem",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_OF_WEEK",
                      },
                      histogramRule: {
                        intervalSize: 52.099998,
                        maxValue: 14.200000,
                        minValue: 77.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 1722257384094704393,
                          endRowIndex: 6806853914295406972,
                          sheetId: 267410826922248014,
                          startColumnIndex: 4960420521375091200,
                          startRowIndex: 6075292528809682844,
                        },
                        {
                          endColumnIndex: 8489122809197354686,
                          endRowIndex: 5237301569541564546,
                          sheetId: 8826209690998482301,
                          startColumnIndex: 5253915760427582171,
                          startRowIndex: 233471661261870305,
                        },
                        {
                          endColumnIndex: 5315041312628929935,
                          endRowIndex: 1947679836811528600,
                          sheetId: 2768459443804178607,
                          startColumnIndex: 206750989681475088,
                          startRowIndex: 2632929014927305882,
                        },
                      ],
                    },
                  },
                  reversed: false,
                },
              ],
              headerCount: 7063132843213073412,
              interpolateNulls: false,
              legendPosition: "LEFT_LEGEND",
              lineSmoothing: false,
              series: [
                {
                  color: {
                    alpha: 69.099998,
                    blue: 39.099998,
                    green: 44.099998,
                    red: 94.199997,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 55.200001,
                      blue: 49.099998,
                      green: 92.199997,
                      red: 93.199997,
                    },
                    themeColor: "ACCENT3",
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "earum",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "MINUTE",
                        },
                        histogramRule: {
                          intervalSize: 15.100000,
                          maxValue: 95.199997,
                          minValue: 74.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 7737932733406450167,
                            endRowIndex: 5709050899977786076,
                            sheetId: 628736130563886550,
                            startColumnIndex: 6305786189744810375,
                            startRowIndex: 2714337872251899460,
                          },
                          {
                            endColumnIndex: 7075326917755228076,
                            endRowIndex: 7414402725435130558,
                            sheetId: 7345597466490321159,
                            startColumnIndex: 4094210177554855693,
                            startRowIndex: 3682040969989885895,
                          },
                          {
                            endColumnIndex: 7790565180724787966,
                            endRowIndex: 4244430343198603030,
                            sheetId: 4439822552253827523,
                            startColumnIndex: 975774015117366189,
                            startRowIndex: 95637087218763829,
                          },
                        ],
                      },
                    },
                    placement: "RIGHT",
                    textFormat: {
                      bold: false,
                      fontFamily: "similique",
                      fontSize: 780762703884682434,
                      foregroundColor: {
                        alpha: 0.200000,
                        blue: 80.099998,
                        green: 21.100000,
                        red: 83.199997,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 43.200001,
                          blue: 66.199997,
                          green: 67.199997,
                          red: 0.100000,
                        },
                        themeColor: "ACCENT4",
                      },
                      italic: false,
                      link: {
                        uri: "eius",
                      },
                      strikethrough: true,
                      underline: false,
                    },
                    type: "NONE",
                  },
                  lineStyle: {
                    type: "INVISIBLE",
                    width: 2913737309090271021,
                  },
                  pointStyle: {
                    shape: "POINT_SHAPE_UNSPECIFIED",
                    size: 27.100000,
                  },
                  series: {
                    aggregateType: "SUM",
                    columnReference: {
                      name: "occaecati",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "HOUR_MINUTE",
                      },
                      histogramRule: {
                        intervalSize: 9.200000,
                        maxValue: 51.099998,
                        minValue: 58.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 3311006502304614561,
                          endRowIndex: 1014134206856689572,
                          sheetId: 1006577959521954189,
                          startColumnIndex: 7711518238924047213,
                          startRowIndex: 3776220146696690056,
                        },
                        {
                          endColumnIndex: 4740289872965462499,
                          endRowIndex: 5249109441701326010,
                          sheetId: 5238620750891273501,
                          startColumnIndex: 510946296853278341,
                          startRowIndex: 6112350397237902160,
                        },
                        {
                          endColumnIndex: 7876634378503487182,
                          endRowIndex: 2354774812204784384,
                          sheetId: 416784373942037525,
                          startColumnIndex: 2832172720847123394,
                          startRowIndex: 5986371073747687695,
                        },
                      ],
                    },
                  },
                  styleOverrides: [
                    {
                      color: {
                        alpha: 65.199997,
                        blue: 94.199997,
                        green: 75.199997,
                        red: 64.099998,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 35.099998,
                          blue: 87.199997,
                          green: 1.100000,
                          red: 89.199997,
                        },
                        themeColor: "ACCENT6",
                      },
                      index: 7784652411332658934,
                      pointStyle: {
                        shape: "PENTAGON",
                        size: 70.199997,
                      },
                    },
                    {
                      color: {
                        alpha: 55.200001,
                        blue: 97.099998,
                        green: 29.200001,
                        red: 30.200001,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 86.199997,
                          blue: 2.200000,
                          green: 87.099998,
                          red: 34.200001,
                        },
                        themeColor: "ACCENT6",
                      },
                      index: 2182927001473764731,
                      pointStyle: {
                        shape: "DIAMOND",
                        size: 67.099998,
                      },
                    },
                    {
                      color: {
                        alpha: 24.200001,
                        blue: 26.200001,
                        green: 1.100000,
                        red: 39.200001,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 54.200001,
                          blue: 42.099998,
                          green: 75.099998,
                          red: 64.099998,
                        },
                        themeColor: "ACCENT5",
                      },
                      index: 6486592305880808110,
                      pointStyle: {
                        shape: "SQUARE",
                        size: 87.199997,
                      },
                    },
                  ],
                  targetAxis: "BOTTOM_AXIS",
                  type: "BAR",
                },
                {
                  color: {
                    alpha: 58.099998,
                    blue: 75.099998,
                    green: 74.199997,
                    red: 48.099998,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 26.200001,
                      blue: 61.099998,
                      green: 95.099998,
                      red: 62.200001,
                    },
                    themeColor: "TEXT",
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "nihil",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "SECOND",
                        },
                        histogramRule: {
                          intervalSize: 79.199997,
                          maxValue: 96.099998,
                          minValue: 94.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 3610347196829877201,
                            endRowIndex: 8717159368931780256,
                            sheetId: 7558952453588128480,
                            startColumnIndex: 138070254648221771,
                            startRowIndex: 6216493764491817145,
                          },
                        ],
                      },
                    },
                    placement: "CENTER",
                    textFormat: {
                      bold: false,
                      fontFamily: "vitae",
                      fontSize: 2961666318902559435,
                      foregroundColor: {
                        alpha: 63.099998,
                        blue: 10.100000,
                        green: 22.100000,
                        red: 31.200001,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 26.100000,
                          blue: 53.200001,
                          green: 18.100000,
                          red: 51.200001,
                        },
                        themeColor: "ACCENT4",
                      },
                      italic: true,
                      link: {
                        uri: "impedit",
                      },
                      strikethrough: false,
                      underline: false,
                    },
                    type: "NONE",
                  },
                  lineStyle: {
                    type: "MEDIUM_DASHED_DOTTED",
                    width: 5309705841049577610,
                  },
                  pointStyle: {
                    shape: "SQUARE",
                    size: 18.100000,
                  },
                  series: {
                    aggregateType: "MIN",
                    columnReference: {
                      name: "ducimus",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_OF_MONTH",
                      },
                      histogramRule: {
                        intervalSize: 75.099998,
                        maxValue: 7.100000,
                        minValue: 63.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 2694835503952271099,
                          endRowIndex: 2017648912018317383,
                          sheetId: 3879414243148748339,
                          startColumnIndex: 2224136654354794463,
                          startRowIndex: 3598093573165332542,
                        },
                        {
                          endColumnIndex: 2016194977539459013,
                          endRowIndex: 2233817820518470792,
                          sheetId: 5301172683028926079,
                          startColumnIndex: 2441786610428429916,
                          startRowIndex: 3577963405391857613,
                        },
                        {
                          endColumnIndex: 1927788488199682781,
                          endRowIndex: 3192784518059545843,
                          sheetId: 7064747760276822332,
                          startColumnIndex: 8140627161710135183,
                          startRowIndex: 58821532809198427,
                        },
                      ],
                    },
                  },
                  styleOverrides: [
                    {
                      color: {
                        alpha: 90.199997,
                        blue: 83.199997,
                        green: 37.099998,
                        red: 67.099998,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 37.200001,
                          blue: 30.100000,
                          green: 84.199997,
                          red: 37.099998,
                        },
                        themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                      },
                      index: 4927910615363204584,
                      pointStyle: {
                        shape: "POINT_SHAPE_UNSPECIFIED",
                        size: 41.200001,
                      },
                    },
                    {
                      color: {
                        alpha: 99.199997,
                        blue: 87.199997,
                        green: 10.200000,
                        red: 44.099998,
                      },
                      colorStyle: {
                        rgbColor: {
                          alpha: 67.199997,
                          blue: 22.200001,
                          green: 40.099998,
                          red: 39.099998,
                        },
                        themeColor: "ACCENT4",
                      },
                      index: 1183369459657248403,
                      pointStyle: {
                        shape: "SQUARE",
                        size: 98.199997,
                      },
                    },
                  ],
                  targetAxis: "BOTTOM_AXIS",
                  type: "COLUMN",
                },
              ],
              stackedType: "NOT_STACKED",
              threeDimensional: true,
              totalDataLabel: {
                customLabelData: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "libero",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_MONTH_DAY",
                    },
                    histogramRule: {
                      intervalSize: 5.200000,
                      maxValue: 21.100000,
                      minValue: 50.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6169800748075434067,
                        endRowIndex: 5616838556551833965,
                        sheetId: 7046574554088268127,
                        startColumnIndex: 1672825818127923639,
                        startRowIndex: 4346813146819895344,
                      },
                    ],
                  },
                },
                placement: "DATA_LABEL_PLACEMENT_UNSPECIFIED",
                textFormat: {
                  bold: false,
                  fontFamily: "sit",
                  fontSize: 4058926131985033052,
                  foregroundColor: {
                    alpha: 83.099998,
                    blue: 33.200001,
                    green: 59.099998,
                    red: 60.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 62.200001,
                      blue: 18.200001,
                      green: 45.099998,
                      red: 19.100000,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  italic: false,
                  link: {
                    uri: "delectus",
                  },
                  strikethrough: false,
                  underline: false,
                },
                type: "DATA_LABEL_TYPE_UNSPECIFIED",
              },
            },
            bubbleChart: {
              bubbleBorderColor: {
                alpha: 5.100000,
                blue: 99.099998,
                green: 86.099998,
                red: 34.200001,
              },
              bubbleBorderColorStyle: {
                rgbColor: {
                  alpha: 82.199997,
                  blue: 76.099998,
                  green: 49.099998,
                  red: 41.200001,
                },
                themeColor: "TEXT",
              },
              bubbleLabels: {
                aggregateType: "COUNT",
                columnReference: {
                  name: "temporibus",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_OF_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 32.099998,
                    maxValue: 90.199997,
                    minValue: 65.199997,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 8840027714531744112,
                      endRowIndex: 7651993670861562551,
                      sheetId: 930164624625635521,
                      startColumnIndex: 877971770341028297,
                      startRowIndex: 2738129863357261275,
                    },
                  ],
                },
              },
              bubbleMaxRadiusSize: 5379256780184602875,
              bubbleMinRadiusSize: 3837128257689942232,
              bubbleOpacity: 20.100000,
              bubbleSizes: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "provident",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "SECOND",
                  },
                  histogramRule: {
                    intervalSize: 35.099998,
                    maxValue: 43.099998,
                    minValue: 42.200001,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 8775169367923687972,
                      endRowIndex: 5800750325388096357,
                      sheetId: 6344681623748602473,
                      startColumnIndex: 3251593835218251057,
                      startRowIndex: 6109655237254744984,
                    },
                    {
                      endColumnIndex: 8122778407218229326,
                      endRowIndex: 7085117137921411043,
                      sheetId: 2315974898942760627,
                      startColumnIndex: 8835536518018092086,
                      startRowIndex: 5484280401295037527,
                    },
                  ],
                },
              },
              bubbleTextStyle: {
                bold: true,
                fontFamily: "velit",
                fontSize: 1212215431564916361,
                foregroundColor: {
                  alpha: 41.200001,
                  blue: 51.200001,
                  green: 62.099998,
                  red: 27.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 83.099998,
                    blue: 39.200001,
                    green: 15.100000,
                    red: 59.200001,
                  },
                  themeColor: "LINK",
                },
                italic: true,
                link: {
                  uri: "velit",
                },
                strikethrough: false,
                underline: false,
              },
              domain: {
                aggregateType: "COUNT",
                columnReference: {
                  name: "ex",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 41.200001,
                    maxValue: 36.099998,
                    minValue: 20.100000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 1899183804346623596,
                      endRowIndex: 6422575061154872567,
                      sheetId: 6772433920271760515,
                      startColumnIndex: 333332360588405187,
                      startRowIndex: 7846196332663563285,
                    },
                    {
                      endColumnIndex: 5349772663537702715,
                      endRowIndex: 5169734304701572107,
                      sheetId: 2988391253617261625,
                      startColumnIndex: 7306083323918748537,
                      startRowIndex: 1366643709241256688,
                    },
                    {
                      endColumnIndex: 8781471637846240924,
                      endRowIndex: 5494245591526349686,
                      sheetId: 3762707337486928885,
                      startColumnIndex: 3083672587841118578,
                      startRowIndex: 8536170496290021151,
                    },
                  ],
                },
              },
              groupIds: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "consectetur",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_OF_WEEK",
                  },
                  histogramRule: {
                    intervalSize: 6.100000,
                    maxValue: 24.100000,
                    minValue: 78.199997,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 5985311705942894169,
                      endRowIndex: 8258209667856460986,
                      sheetId: 8222697089899038089,
                      startColumnIndex: 9108794179580611704,
                      startRowIndex: 6101326347107372847,
                    },
                    {
                      endColumnIndex: 2167042912252865182,
                      endRowIndex: 9139382529689541291,
                      sheetId: 9204714038943224739,
                      startColumnIndex: 4827662614617422472,
                      startRowIndex: 7544222996026739335,
                    },
                  ],
                },
              },
              legendPosition: "LEFT_LEGEND",
              series: {
                aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                columnReference: {
                  name: "quod",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR",
                  },
                  histogramRule: {
                    intervalSize: 99.199997,
                    maxValue: 32.099998,
                    minValue: 74.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 5749046127761891919,
                      endRowIndex: 7605437358756226692,
                      sheetId: 6264694794992915405,
                      startColumnIndex: 9057898832200498348,
                      startRowIndex: 8900693123773135246,
                    },
                    {
                      endColumnIndex: 1250224524938540651,
                      endRowIndex: 4482021839923647941,
                      sheetId: 3655669633336596125,
                      startColumnIndex: 5163223997127851989,
                      startRowIndex: 2666572889283451641,
                    },
                    {
                      endColumnIndex: 3397684855174003376,
                      endRowIndex: 3418014937566020380,
                      sheetId: 3262790939309106561,
                      startColumnIndex: 7572684642247855797,
                      startRowIndex: 1189594589800697015,
                    },
                  ],
                },
              },
            },
            candlestickChart: {
              data: [
                {
                  closeSeries: {
                    data: {
                      aggregateType: "AVERAGE",
                      columnReference: {
                        name: "quam",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_MONTH",
                        },
                        histogramRule: {
                          intervalSize: 44.200001,
                          maxValue: 50.099998,
                          minValue: 49.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 8244692889005882935,
                            endRowIndex: 3465348436218443495,
                            sheetId: 4592498979202671531,
                            startColumnIndex: 4941633866390402490,
                            startRowIndex: 1555661415784512604,
                          },
                          {
                            endColumnIndex: 1797493639439707540,
                            endRowIndex: 7206393193638443973,
                            sheetId: 498077840488538742,
                            startColumnIndex: 6271970203810132207,
                            startRowIndex: 1159757496378936009,
                          },
                          {
                            endColumnIndex: 7830592601286782450,
                            endRowIndex: 7398289078627151591,
                            sheetId: 8145073534734223718,
                            startColumnIndex: 7682030520415708377,
                            startRowIndex: 5931913278346364643,
                          },
                        ],
                      },
                    },
                  },
                  highSeries: {
                    data: {
                      aggregateType: "MEDIAN",
                      columnReference: {
                        name: "voluptatem",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_MONTH",
                        },
                        histogramRule: {
                          intervalSize: 9.200000,
                          maxValue: 88.099998,
                          minValue: 91.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 5599213458975049108,
                            endRowIndex: 1524205877478056431,
                            sheetId: 21465274635986411,
                            startColumnIndex: 4288091786121606520,
                            startRowIndex: 2907685687367896357,
                          },
                          {
                            endColumnIndex: 8709798443933257976,
                            endRowIndex: 1164941465001866372,
                            sheetId: 2479863810851335485,
                            startColumnIndex: 3032931341740596807,
                            startRowIndex: 874304157714379469,
                          },
                        ],
                      },
                    },
                  },
                  lowSeries: {
                    data: {
                      aggregateType: "MIN",
                      columnReference: {
                        name: "mollitia",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_MONTH",
                        },
                        histogramRule: {
                          intervalSize: 41.200001,
                          maxValue: 11.100000,
                          minValue: 53.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 9052942516321877360,
                            endRowIndex: 9114420392493788026,
                            sheetId: 3927863157779495288,
                            startColumnIndex: 3439988706904213004,
                            startRowIndex: 8483386137815289394,
                          },
                          {
                            endColumnIndex: 9195518139682139969,
                            endRowIndex: 2554502628276599388,
                            sheetId: 5948303274807436742,
                            startColumnIndex: 5016208831800199733,
                            startRowIndex: 794845949240794926,
                          },
                          {
                            endColumnIndex: 2656071855687479136,
                            endRowIndex: 5266817427165493279,
                            sheetId: 2699074029947238851,
                            startColumnIndex: 4093473573557994567,
                            startRowIndex: 1580890665990747473,
                          },
                        ],
                      },
                    },
                  },
                  openSeries: {
                    data: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "impedit",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                        },
                        histogramRule: {
                          intervalSize: 52.200001,
                          maxValue: 53.099998,
                          minValue: 64.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 1837771561532866041,
                            endRowIndex: 4307932775244302431,
                            sheetId: 6844285582576213492,
                            startColumnIndex: 7141234196782667909,
                            startRowIndex: 7750405730365785201,
                          },
                          {
                            endColumnIndex: 7038636669961757474,
                            endRowIndex: 7531013800473166299,
                            sheetId: 5173532296621172116,
                            startColumnIndex: 3605490308493121084,
                            startRowIndex: 4265584048857011385,
                          },
                          {
                            endColumnIndex: 2942363778770894022,
                            endRowIndex: 4298400118342901411,
                            sheetId: 8822316826616709776,
                            startColumnIndex: 3555199455857554022,
                            startRowIndex: 6069070530914599737,
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  closeSeries: {
                    data: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "autem",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "SECOND",
                        },
                        histogramRule: {
                          intervalSize: 5.100000,
                          maxValue: 32.200001,
                          minValue: 57.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 8488686365707717511,
                            endRowIndex: 4629475428297635047,
                            sheetId: 2216869398425192799,
                            startColumnIndex: 5285795622030507081,
                            startRowIndex: 1308380148928325322,
                          },
                          {
                            endColumnIndex: 3384798835332124363,
                            endRowIndex: 1982907480846650901,
                            sheetId: 9109319277002119330,
                            startColumnIndex: 3586215396310404772,
                            startRowIndex: 1986200894977352971,
                          },
                          {
                            endColumnIndex: 919346380322687681,
                            endRowIndex: 3686468054977342140,
                            sheetId: 7496980745757464405,
                            startColumnIndex: 1699255211235355922,
                            startRowIndex: 3581852014991211774,
                          },
                        ],
                      },
                    },
                  },
                  highSeries: {
                    data: {
                      aggregateType: "MIN",
                      columnReference: {
                        name: "vel",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "MONTH",
                        },
                        histogramRule: {
                          intervalSize: 55.200001,
                          maxValue: 87.099998,
                          minValue: 78.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 7706621203663547392,
                            endRowIndex: 4242124000481319411,
                            sheetId: 3528019292027891119,
                            startColumnIndex: 6401838622527391493,
                            startRowIndex: 7725681931386919528,
                          },
                          {
                            endColumnIndex: 4452191486992069035,
                            endRowIndex: 7988225730898648363,
                            sheetId: 1571517838252775869,
                            startColumnIndex: 855590164855776697,
                            startRowIndex: 6749553551297910215,
                          },
                          {
                            endColumnIndex: 1237865279263064732,
                            endRowIndex: 2295003407094513108,
                            sheetId: 4058035679963257197,
                            startColumnIndex: 8371854993373254708,
                            startRowIndex: 2918297793027856246,
                          },
                        ],
                      },
                    },
                  },
                  lowSeries: {
                    data: {
                      aggregateType: "AVERAGE",
                      columnReference: {
                        name: "est",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "SECOND",
                        },
                        histogramRule: {
                          intervalSize: 53.200001,
                          maxValue: 19.200001,
                          minValue: 95.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 6354711688573836289,
                            endRowIndex: 6674701459703399121,
                            sheetId: 5720264503522001500,
                            startColumnIndex: 3185853707453477249,
                            startRowIndex: 5947486723112717314,
                          },
                        ],
                      },
                    },
                  },
                  openSeries: {
                    data: {
                      aggregateType: "MEDIAN",
                      columnReference: {
                        name: "repudiandae",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR",
                        },
                        histogramRule: {
                          intervalSize: 93.199997,
                          maxValue: 8.200000,
                          minValue: 67.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 9050354222298295305,
                            endRowIndex: 3096981861590198512,
                            sheetId: 6657900351126514970,
                            startColumnIndex: 9205996331308194531,
                            startRowIndex: 2682251673356061298,
                          },
                          {
                            endColumnIndex: 8448947165691844604,
                            endRowIndex: 2132438575197639467,
                            sheetId: 5150411156011633368,
                            startColumnIndex: 8827975742060009194,
                            startRowIndex: 3023703693476660263,
                          },
                          {
                            endColumnIndex: 8872586270966576431,
                            endRowIndex: 443376655981928919,
                            sheetId: 7305665174525906306,
                            startColumnIndex: 3434161094613788259,
                            startRowIndex: 2565140644526349950,
                          },
                        ],
                      },
                    },
                  },
                },
                {
                  closeSeries: {
                    data: {
                      aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                      columnReference: {
                        name: "soluta",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR",
                        },
                        histogramRule: {
                          intervalSize: 42.099998,
                          maxValue: 84.199997,
                          minValue: 33.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 6227370536809609351,
                            endRowIndex: 9082468471436008798,
                            sheetId: 3863552776476109374,
                            startColumnIndex: 4247233904386673889,
                            startRowIndex: 4978400863619406273,
                          },
                          {
                            endColumnIndex: 3494871350591347850,
                            endRowIndex: 8995772166831229458,
                            sheetId: 1978799517960074467,
                            startColumnIndex: 3094650466041670612,
                            startRowIndex: 6027816396719145161,
                          },
                          {
                            endColumnIndex: 3255008079690514851,
                            endRowIndex: 283245548051266855,
                            sheetId: 1805595273311913556,
                            startColumnIndex: 851233848160071151,
                            startRowIndex: 6648564662514405874,
                          },
                        ],
                      },
                    },
                  },
                  highSeries: {
                    data: {
                      aggregateType: "MAX",
                      columnReference: {
                        name: "minima",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "HOUR",
                        },
                        histogramRule: {
                          intervalSize: 85.099998,
                          maxValue: 65.099998,
                          minValue: 55.099998,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 484862083324640131,
                            endRowIndex: 5348500329126228629,
                            sheetId: 1060201617639370607,
                            startColumnIndex: 8315218155788728683,
                            startRowIndex: 8631087083181041463,
                          },
                          {
                            endColumnIndex: 3605737626171060817,
                            endRowIndex: 5083140303496963647,
                            sheetId: 6759611336093385673,
                            startColumnIndex: 7225094230991324244,
                            startRowIndex: 3514085149836528993,
                          },
                        ],
                      },
                    },
                  },
                  lowSeries: {
                    data: {
                      aggregateType: "MEDIAN",
                      columnReference: {
                        name: "architecto",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "SECOND",
                        },
                        histogramRule: {
                          intervalSize: 48.200001,
                          maxValue: 32.099998,
                          minValue: 22.100000,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 103030030962261951,
                            endRowIndex: 5882413521805660993,
                            sheetId: 3591562740060067819,
                            startColumnIndex: 2710240038707193594,
                            startRowIndex: 264103453905648685,
                          },
                          {
                            endColumnIndex: 4467953763754587237,
                            endRowIndex: 6288388741944970782,
                            sheetId: 5944883862212547024,
                            startColumnIndex: 8183234858518785390,
                            startRowIndex: 7949841593961064765,
                          },
                        ],
                      },
                    },
                  },
                  openSeries: {
                    data: {
                      aggregateType: "MAX",
                      columnReference: {
                        name: "qui",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_OF_YEAR",
                        },
                        histogramRule: {
                          intervalSize: 59.200001,
                          maxValue: 7.200000,
                          minValue: 96.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 351388749718514312,
                            endRowIndex: 1579492146589089255,
                            sheetId: 6723239674165272579,
                            startColumnIndex: 7463353612291187897,
                            startRowIndex: 6743922723322076088,
                          },
                        ],
                      },
                    },
                  },
                },
              ],
              domain: {
                data: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "delectus",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR",
                    },
                    histogramRule: {
                      intervalSize: 45.099998,
                      maxValue: 56.099998,
                      minValue: 45.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 6061072902357915288,
                        endRowIndex: 4793409574154864231,
                        sheetId: 7410606342257833358,
                        startColumnIndex: 8125116257248380023,
                        startRowIndex: 4165213553623590738,
                      },
                      {
                        endColumnIndex: 8494975303226474786,
                        endRowIndex: 3607621814835639956,
                        sheetId: 6879777205905167089,
                        startColumnIndex: 2835435954965409556,
                        startRowIndex: 594985161357362209,
                      },
                      {
                        endColumnIndex: 6634560714653631700,
                        endRowIndex: 3833184944958001563,
                        sheetId: 5921356199850564139,
                        startColumnIndex: 6939734545509099339,
                        startRowIndex: 1384156629671601994,
                      },
                    ],
                  },
                },
                reversed: false,
              },
            },
            dataSourceChartProperties: {
              dataExecutionStatus: {
                errorCode: "TIMED_OUT",
                errorMessage: "corporis",
                lastRefreshTime: "est",
                state: "NOT_STARTED",
              },
              dataSourceId: "aut",
            },
            filterSpecs: [
              {
                columnIndex: 7507540480653569233,
                dataSourceColumnReference: {
                  name: "numquam",
                },
                filterCriteria: {
                  condition: {
                    type: "BOOLEAN",
                    values: [
                      {
                        relativeDate: "TODAY",
                        userEnteredValue: "non",
                      },
                      {
                        relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                        userEnteredValue: "deleniti",
                      },
                    ],
                  },
                  hiddenValues: [
                    "ullam",
                    "cupiditate",
                    "optio",
                  ],
                  visibleBackgroundColor: {
                    alpha: 21.100000,
                    blue: 0.100000,
                    green: 18.100000,
                    red: 3.100000,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 10.200000,
                      blue: 58.099998,
                      green: 73.199997,
                      red: 37.200001,
                    },
                    themeColor: "ACCENT5",
                  },
                  visibleForegroundColor: {
                    alpha: 95.199997,
                    blue: 57.099998,
                    green: 36.099998,
                    red: 97.199997,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 79.199997,
                      blue: 28.100000,
                      green: 48.099998,
                      red: 61.200001,
                    },
                    themeColor: "BACKGROUND",
                  },
                },
              },
              {
                columnIndex: 2062512057044578664,
                dataSourceColumnReference: {
                  name: "praesentium",
                },
                filterCriteria: {
                  condition: {
                    type: "DATE_ON_OR_AFTER",
                    values: [
                      {
                        relativeDate: "PAST_YEAR",
                        userEnteredValue: "ipsa",
                      },
                      {
                        relativeDate: "YESTERDAY",
                        userEnteredValue: "quis",
                      },
                      {
                        relativeDate: "PAST_WEEK",
                        userEnteredValue: "est",
                      },
                    ],
                  },
                  hiddenValues: [
                    "explicabo",
                  ],
                  visibleBackgroundColor: {
                    alpha: 86.199997,
                    blue: 81.199997,
                    green: 90.099998,
                    red: 51.099998,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 26.100000,
                      blue: 19.100000,
                      green: 85.099998,
                      red: 67.199997,
                    },
                    themeColor: "ACCENT3",
                  },
                  visibleForegroundColor: {
                    alpha: 0.100000,
                    blue: 88.199997,
                    green: 53.099998,
                    red: 93.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 65.199997,
                      blue: 29.100000,
                      green: 65.099998,
                      red: 45.200001,
                    },
                    themeColor: "TEXT",
                  },
                },
              },
              {
                columnIndex: 8801463145723457085,
                dataSourceColumnReference: {
                  name: "rerum",
                },
                filterCriteria: {
                  condition: {
                    type: "DATE_ON_OR_AFTER",
                    values: [
                      {
                        relativeDate: "TOMORROW",
                        userEnteredValue: "nulla",
                      },
                    ],
                  },
                  hiddenValues: [
                    "est",
                    "explicabo",
                    "ipsum",
                  ],
                  visibleBackgroundColor: {
                    alpha: 90.099998,
                    blue: 9.200000,
                    green: 66.199997,
                    red: 19.100000,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 97.099998,
                      blue: 48.200001,
                      green: 9.200000,
                      red: 98.099998,
                    },
                    themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                  },
                  visibleForegroundColor: {
                    alpha: 90.199997,
                    blue: 35.099998,
                    green: 34.200001,
                    red: 82.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 32.099998,
                      blue: 8.100000,
                      green: 67.199997,
                      red: 47.099998,
                    },
                    themeColor: "ACCENT5",
                  },
                },
              },
            ],
            fontName: "vel",
            hiddenDimensionStrategy: "SHOW_ALL",
            histogramChart: {
              bucketSize: 77.099998,
              legendPosition: "RIGHT_LEGEND",
              outlierPercentile: 32.099998,
              series: [
                {
                  barColor: {
                    alpha: 6.200000,
                    blue: 69.199997,
                    green: 69.199997,
                    red: 2.200000,
                  },
                  barColorStyle: {
                    rgbColor: {
                      alpha: 86.099998,
                      blue: 39.200001,
                      green: 38.099998,
                      red: 81.199997,
                    },
                    themeColor: "ACCENT5",
                  },
                  data: {
                    aggregateType: "COUNT",
                    columnReference: {
                      name: "odit",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_MONTH",
                      },
                      histogramRule: {
                        intervalSize: 77.199997,
                        maxValue: 19.200001,
                        minValue: 9.100000,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 1798883249950478130,
                          endRowIndex: 6231046529182745542,
                          sheetId: 5787365101354129441,
                          startColumnIndex: 2635433669654787680,
                          startRowIndex: 300766272548707928,
                        },
                      ],
                    },
                  },
                },
                {
                  barColor: {
                    alpha: 68.099998,
                    blue: 97.099998,
                    green: 62.200001,
                    red: 8.100000,
                  },
                  barColorStyle: {
                    rgbColor: {
                      alpha: 38.099998,
                      blue: 10.200000,
                      green: 0.200000,
                      red: 24.200001,
                    },
                    themeColor: "LINK",
                  },
                  data: {
                    aggregateType: "MIN",
                    columnReference: {
                      name: "et",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                      },
                      histogramRule: {
                        intervalSize: 56.200001,
                        maxValue: 5.200000,
                        minValue: 25.200001,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 6899756063708725608,
                          endRowIndex: 6776891562060236408,
                          sheetId: 91463438369849542,
                          startColumnIndex: 7911948866903020390,
                          startRowIndex: 7176968493077372282,
                        },
                        {
                          endColumnIndex: 247539182252006310,
                          endRowIndex: 7094639259991711795,
                          sheetId: 7329918021363181587,
                          startColumnIndex: 7730352116486954985,
                          startRowIndex: 2363622746073839906,
                        },
                        {
                          endColumnIndex: 7888828675217410306,
                          endRowIndex: 8964984836956926853,
                          sheetId: 1886463396840595743,
                          startColumnIndex: 1315245462527178312,
                          startRowIndex: 8692139213764819172,
                        },
                      ],
                    },
                  },
                },
                {
                  barColor: {
                    alpha: 11.200000,
                    blue: 32.099998,
                    green: 74.199997,
                    red: 74.099998,
                  },
                  barColorStyle: {
                    rgbColor: {
                      alpha: 84.199997,
                      blue: 1.100000,
                      green: 34.200001,
                      red: 27.200001,
                    },
                    themeColor: "ACCENT2",
                  },
                  data: {
                    aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                    columnReference: {
                      name: "repellendus",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "HOUR_MINUTE",
                      },
                      histogramRule: {
                        intervalSize: 89.199997,
                        maxValue: 86.199997,
                        minValue: 9.100000,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 2019456442912679638,
                          endRowIndex: 2053960145577179711,
                          sheetId: 4971792804821209251,
                          startColumnIndex: 4745871145793920244,
                          startRowIndex: 1166936187357186828,
                        },
                      ],
                    },
                  },
                },
              ],
              showItemDividers: true,
            },
            maximized: true,
            orgChart: {
              labels: {
                aggregateType: "SUM",
                columnReference: {
                  name: "pariatur",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "HOUR_MINUTE_AMPM",
                  },
                  histogramRule: {
                    intervalSize: 11.100000,
                    maxValue: 43.099998,
                    minValue: 15.200000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 3145983404393246906,
                      endRowIndex: 8560519229886112507,
                      sheetId: 1300731236902972029,
                      startColumnIndex: 7600473039216071392,
                      startRowIndex: 6262313226816972567,
                    },
                    {
                      endColumnIndex: 7049781084677506806,
                      endRowIndex: 2816803884497774479,
                      sheetId: 8577033123891319252,
                      startColumnIndex: 5633374325391763150,
                      startRowIndex: 5601858986585557058,
                    },
                    {
                      endColumnIndex: 7575985322491977178,
                      endRowIndex: 4269480149741687594,
                      sheetId: 7780081727720743210,
                      startColumnIndex: 1926445445564534908,
                      startRowIndex: 7759330970468572287,
                    },
                  ],
                },
              },
              nodeColor: {
                alpha: 46.099998,
                blue: 51.200001,
                green: 71.099998,
                red: 55.200001,
              },
              nodeColorStyle: {
                rgbColor: {
                  alpha: 20.100000,
                  blue: 52.200001,
                  green: 51.099998,
                  red: 77.199997,
                },
                themeColor: "LINK",
              },
              nodeSize: "LARGE",
              parentLabels: {
                aggregateType: "MAX",
                columnReference: {
                  name: "sed",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                  },
                  histogramRule: {
                    intervalSize: 56.099998,
                    maxValue: 18.100000,
                    minValue: 14.200000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 3952433725862382093,
                      endRowIndex: 5751280114491409199,
                      sheetId: 583132194791807320,
                      startColumnIndex: 6475066373833016588,
                      startRowIndex: 2188939995772775546,
                    },
                    {
                      endColumnIndex: 4573532363783179977,
                      endRowIndex: 7904523849277738479,
                      sheetId: 1290789052481561485,
                      startColumnIndex: 5139160766718920350,
                      startRowIndex: 7856583269821262034,
                    },
                  ],
                },
              },
              selectedNodeColor: {
                alpha: 68.099998,
                blue: 86.199997,
                green: 33.200001,
                red: 15.100000,
              },
              selectedNodeColorStyle: {
                rgbColor: {
                  alpha: 8.200000,
                  blue: 35.099998,
                  green: 60.099998,
                  red: 14.200000,
                },
                themeColor: "ACCENT4",
              },
              tooltips: {
                aggregateType: "SUM",
                columnReference: {
                  name: "ut",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 4.100000,
                    maxValue: 37.200001,
                    minValue: 86.199997,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 1617788667313746642,
                      endRowIndex: 4497761426769894282,
                      sheetId: 2476346123290597509,
                      startColumnIndex: 1643364410773671946,
                      startRowIndex: 6543854197685933569,
                    },
                    {
                      endColumnIndex: 7365115957972668958,
                      endRowIndex: 2601324350931856808,
                      sheetId: 341324094892095492,
                      startColumnIndex: 162297873568695812,
                      startRowIndex: 6714440523814059279,
                    },
                    {
                      endColumnIndex: 5771879595167497362,
                      endRowIndex: 889051309863768098,
                      sheetId: 3759831949376975894,
                      startColumnIndex: 851969689836579947,
                      startRowIndex: 9052167343401934409,
                    },
                  ],
                },
              },
            },
            pieChart: {
              domain: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "in",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_OF_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 77.199997,
                    maxValue: 98.099998,
                    minValue: 66.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 2370765389808627899,
                      endRowIndex: 5369874173615103183,
                      sheetId: 6246997929489719934,
                      startColumnIndex: 2346183910436120293,
                      startRowIndex: 1186780149944961735,
                    },
                    {
                      endColumnIndex: 5204458917913742061,
                      endRowIndex: 7621310623567034332,
                      sheetId: 2245995928521834490,
                      startColumnIndex: 8459062259952159877,
                      startRowIndex: 336141207885590857,
                    },
                    {
                      endColumnIndex: 6470803969905842748,
                      endRowIndex: 1068837418533060528,
                      sheetId: 5898008254065232769,
                      startColumnIndex: 436086552249559515,
                      startRowIndex: 9107636312622711986,
                    },
                  ],
                },
              },
              legendPosition: "NO_LEGEND",
              pieHole: 2.200000,
              series: {
                aggregateType: "SUM",
                columnReference: {
                  name: "distinctio",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 84.099998,
                    maxValue: 87.199997,
                    minValue: 59.200001,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 8987659614928161619,
                      endRowIndex: 5811499531906393477,
                      sheetId: 788508589690608235,
                      startColumnIndex: 952910924379298742,
                      startRowIndex: 4673168217401163555,
                    },
                    {
                      endColumnIndex: 4448805230322466473,
                      endRowIndex: 1997189645267233001,
                      sheetId: 7045834430378632192,
                      startColumnIndex: 4281604047074471608,
                      startRowIndex: 7547223329453555562,
                    },
                  ],
                },
              },
              threeDimensional: true,
            },
            scorecardChart: {
              aggregateType: "MAX",
              baselineValueData: {
                aggregateType: "SUM",
                columnReference: {
                  name: "non",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "HOUR_MINUTE",
                  },
                  histogramRule: {
                    intervalSize: 53.099998,
                    maxValue: 72.199997,
                    minValue: 99.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 6215944827953278652,
                      endRowIndex: 1147863041435550947,
                      sheetId: 3126151483622735231,
                      startColumnIndex: 2803446689041373826,
                      startRowIndex: 233990020433515592,
                    },
                  ],
                },
              },
              baselineValueFormat: {
                comparisonType: "ABSOLUTE_DIFFERENCE",
                description: "nesciunt",
                negativeColor: {
                  alpha: 96.199997,
                  blue: 28.200001,
                  green: 95.099998,
                  red: 12.200000,
                },
                negativeColorStyle: {
                  rgbColor: {
                    alpha: 35.099998,
                    blue: 74.199997,
                    green: 66.199997,
                    red: 36.200001,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                position: {
                  horizontalAlignment: "CENTER",
                },
                positiveColor: {
                  alpha: 58.200001,
                  blue: 93.199997,
                  green: 32.200001,
                  red: 13.100000,
                },
                positiveColorStyle: {
                  rgbColor: {
                    alpha: 89.199997,
                    blue: 19.200001,
                    green: 95.199997,
                    red: 13.100000,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                textFormat: {
                  bold: false,
                  fontFamily: "incidunt",
                  fontSize: 8623558608719726943,
                  foregroundColor: {
                    alpha: 71.199997,
                    blue: 44.099998,
                    green: 37.099998,
                    red: 5.100000,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 79.099998,
                      blue: 82.099998,
                      green: 83.199997,
                      red: 21.200001,
                    },
                    themeColor: "ACCENT2",
                  },
                  italic: true,
                  link: {
                    uri: "voluptatem",
                  },
                  strikethrough: false,
                  underline: false,
                },
              },
              customFormatOptions: {
                prefix: "atque",
                suffix: "dolor",
              },
              keyValueData: {
                aggregateType: "MIN",
                columnReference: {
                  name: "non",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_QUARTER",
                  },
                  histogramRule: {
                    intervalSize: 13.100000,
                    maxValue: 92.199997,
                    minValue: 60.099998,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 3957615297141365065,
                      endRowIndex: 7995206273544018595,
                      sheetId: 2434561418253749646,
                      startColumnIndex: 5172093528306534509,
                      startRowIndex: 3079645456096498895,
                    },
                  ],
                },
              },
              keyValueFormat: {
                position: {
                  horizontalAlignment: "CENTER",
                },
                textFormat: {
                  bold: false,
                  fontFamily: "et",
                  fontSize: 304362559853959884,
                  foregroundColor: {
                    alpha: 7.200000,
                    blue: 29.100000,
                    green: 15.200000,
                    red: 71.199997,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 88.199997,
                      blue: 73.199997,
                      green: 87.199997,
                      red: 68.099998,
                    },
                    themeColor: "ACCENT3",
                  },
                  italic: true,
                  link: {
                    uri: "soluta",
                  },
                  strikethrough: false,
                  underline: false,
                },
              },
              numberFormatSource: "FROM_DATA",
              scaleFactor: 68.199997,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 75.099998,
                  blue: 26.100000,
                  green: 96.099998,
                  red: 53.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 49.099998,
                    blue: 78.099998,
                    green: 69.099998,
                    red: 70.099998,
                  },
                  themeColor: "ACCENT1",
                },
                dataSourceColumnReference: {
                  name: "eaque",
                },
                dimensionIndex: 961257964788340181,
                foregroundColor: {
                  alpha: 95.099998,
                  blue: 94.099998,
                  green: 68.199997,
                  red: 48.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 53.200001,
                    blue: 11.100000,
                    green: 64.199997,
                    red: 83.099998,
                  },
                  themeColor: "ACCENT6",
                },
                sortOrder: "DESCENDING",
              },
              {
                backgroundColor: {
                  alpha: 77.199997,
                  blue: 39.099998,
                  green: 9.200000,
                  red: 90.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 41.099998,
                    blue: 12.200000,
                    green: 33.200001,
                    red: 0.100000,
                  },
                  themeColor: "ACCENT2",
                },
                dataSourceColumnReference: {
                  name: "laudantium",
                },
                dimensionIndex: 7000020529336581877,
                foregroundColor: {
                  alpha: 50.200001,
                  blue: 36.099998,
                  green: 9.100000,
                  red: 78.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 44.200001,
                    blue: 36.099998,
                    green: 78.099998,
                    red: 61.200001,
                  },
                  themeColor: "TEXT",
                },
                sortOrder: "DESCENDING",
              },
              {
                backgroundColor: {
                  alpha: 26.100000,
                  blue: 2.200000,
                  green: 20.100000,
                  red: 25.200001,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 81.099998,
                    blue: 58.099998,
                    green: 54.099998,
                    red: 42.099998,
                  },
                  themeColor: "ACCENT4",
                },
                dataSourceColumnReference: {
                  name: "minus",
                },
                dimensionIndex: 8609286958591564502,
                foregroundColor: {
                  alpha: 35.200001,
                  blue: 7.100000,
                  green: 23.200001,
                  red: 60.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 73.199997,
                    blue: 47.099998,
                    green: 98.099998,
                    red: 38.200001,
                  },
                  themeColor: "ACCENT1",
                },
                sortOrder: "DESCENDING",
              },
            ],
            subtitle: "modi",
            subtitleTextFormat: {
              bold: true,
              fontFamily: "ipsum",
              fontSize: 8020704836209220279,
              foregroundColor: {
                alpha: 65.199997,
                blue: 38.099998,
                green: 11.200000,
                red: 67.199997,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 93.099998,
                  blue: 86.199997,
                  green: 51.099998,
                  red: 8.200000,
                },
                themeColor: "TEXT",
              },
              italic: false,
              link: {
                uri: "nobis",
              },
              strikethrough: true,
              underline: false,
            },
            subtitleTextPosition: {
              horizontalAlignment: "LEFT",
            },
            title: "rerum",
            titleTextFormat: {
              bold: true,
              fontFamily: "beatae",
              fontSize: 196941941698934239,
              foregroundColor: {
                alpha: 65.199997,
                blue: 30.100000,
                green: 37.099998,
                red: 59.099998,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 59.099998,
                  blue: 47.099998,
                  green: 68.099998,
                  red: 34.099998,
                },
                themeColor: "ACCENT5",
              },
              italic: false,
              link: {
                uri: "omnis",
              },
              strikethrough: true,
              underline: true,
            },
            titleTextPosition: {
              horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
            },
            treemapChart: {
              colorData: {
                aggregateType: "AVERAGE",
                columnReference: {
                  name: "porro",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED",
                  },
                  histogramRule: {
                    intervalSize: 87.199997,
                    maxValue: 22.100000,
                    minValue: 9.200000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 964829939791729620,
                      endRowIndex: 913324392980536747,
                      sheetId: 701658655672941458,
                      startColumnIndex: 9071495682145257507,
                      startRowIndex: 8463659299453438412,
                    },
                  ],
                },
              },
              colorScale: {
                maxValueColor: {
                  alpha: 53.200001,
                  blue: 57.099998,
                  green: 46.200001,
                  red: 17.100000,
                },
                maxValueColorStyle: {
                  rgbColor: {
                    alpha: 29.200001,
                    blue: 91.199997,
                    green: 32.099998,
                    red: 22.200001,
                  },
                  themeColor: "ACCENT6",
                },
                midValueColor: {
                  alpha: 22.100000,
                  blue: 43.099998,
                  green: 70.099998,
                  red: 62.200001,
                },
                midValueColorStyle: {
                  rgbColor: {
                    alpha: 94.099998,
                    blue: 86.099998,
                    green: 4.100000,
                    red: 11.100000,
                  },
                  themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
                minValueColor: {
                  alpha: 38.200001,
                  blue: 84.199997,
                  green: 11.200000,
                  red: 70.099998,
                },
                minValueColorStyle: {
                  rgbColor: {
                    alpha: 57.200001,
                    blue: 40.200001,
                    green: 14.100000,
                    red: 23.200001,
                  },
                  themeColor: "ACCENT5",
                },
                noDataColor: {
                  alpha: 27.100000,
                  blue: 84.099998,
                  green: 87.099998,
                  red: 64.099998,
                },
                noDataColorStyle: {
                  rgbColor: {
                    alpha: 7.200000,
                    blue: 83.099998,
                    green: 99.099998,
                    red: 1.200000,
                  },
                  themeColor: "ACCENT2",
                },
              },
              headerColor: {
                alpha: 21.100000,
                blue: 98.099998,
                green: 3.200000,
                red: 32.099998,
              },
              headerColorStyle: {
                rgbColor: {
                  alpha: 91.199997,
                  blue: 38.099998,
                  green: 87.199997,
                  red: 48.200001,
                },
                themeColor: "ACCENT6",
              },
              hideTooltips: false,
              hintedLevels: 1864360809550058084,
              labels: {
                aggregateType: "COUNT",
                columnReference: {
                  name: "aut",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "DAY_OF_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 23.200001,
                    maxValue: 99.199997,
                    minValue: 4.200000,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 4672933387652228234,
                      endRowIndex: 2486676106705107028,
                      sheetId: 6209329945322590371,
                      startColumnIndex: 2199627581116717680,
                      startRowIndex: 555021927523332600,
                    },
                    {
                      endColumnIndex: 3220331906908401241,
                      endRowIndex: 5736726599850307502,
                      sheetId: 3155714758558080428,
                      startColumnIndex: 644489778168575294,
                      startRowIndex: 7305625157880169305,
                    },
                  ],
                },
              },
              levels: 4695774998579492178,
              maxValue: 95.099998,
              minValue: 63.099998,
              parentLabels: {
                aggregateType: "COUNT",
                columnReference: {
                  name: "ad",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 55.099998,
                    maxValue: 78.199997,
                    minValue: 91.199997,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 3603289359982417665,
                      endRowIndex: 5927701015569141507,
                      sheetId: 4404928500755283961,
                      startColumnIndex: 6645478036029807390,
                      startRowIndex: 8214454162067734382,
                    },
                    {
                      endColumnIndex: 8022190704661820290,
                      endRowIndex: 373319575679090366,
                      sheetId: 9043928385207827939,
                      startColumnIndex: 9117373127337858234,
                      startRowIndex: 5361734236509137918,
                    },
                  ],
                },
              },
              sizeData: {
                aggregateType: "COUNT",
                columnReference: {
                  name: "eum",
                },
                groupRule: {
                  dateTimeRule: {
                    type: "YEAR_MONTH",
                  },
                  histogramRule: {
                    intervalSize: 46.200001,
                    maxValue: 6.100000,
                    minValue: 71.199997,
                  },
                },
                sourceRange: {
                  sources: [
                    {
                      endColumnIndex: 7685840428587676600,
                      endRowIndex: 485309235390600125,
                      sheetId: 5123557587379691593,
                      startColumnIndex: 7592221493805408698,
                      startRowIndex: 397262635636545252,
                    },
                  ],
                },
              },
              textFormat: {
                bold: true,
                fontFamily: "sint",
                fontSize: 484829677342681066,
                foregroundColor: {
                  alpha: 96.099998,
                  blue: 28.200001,
                  green: 34.099998,
                  red: 60.200001,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 41.099998,
                    blue: 94.199997,
                    green: 19.100000,
                    red: 87.199997,
                  },
                  themeColor: "ACCENT2",
                },
                italic: false,
                link: {
                  uri: "dicta",
                },
                strikethrough: true,
                underline: true,
              },
            },
            waterfallChart: {
              connectorLineStyle: {
                type: "MEDIUM_DASHED_DOTTED",
                width: 7147390355542200286,
              },
              domain: {
                data: {
                  aggregateType: "COUNT",
                  columnReference: {
                    name: "et",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "YEAR_QUARTER",
                    },
                    histogramRule: {
                      intervalSize: 25.200001,
                      maxValue: 55.200001,
                      minValue: 77.099998,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 3407203559365167083,
                        endRowIndex: 1609491644285343362,
                        sheetId: 4514773753748253648,
                        startColumnIndex: 4550929008170370499,
                        startRowIndex: 1635092023228937173,
                      },
                    ],
                  },
                },
                reversed: true,
              },
              firstValueIsTotal: true,
              hideConnectorLines: true,
              series: [
                {
                  customSubtotals: [
                    {
                      dataIsSubtotal: false,
                      label: "ut",
                      subtotalIndex: 2566854755166152545,
                    },
                    {
                      dataIsSubtotal: true,
                      label: "in",
                      subtotalIndex: 5245319676326406034,
                    },
                    {
                      dataIsSubtotal: true,
                      label: "esse",
                      subtotalIndex: 4376015179893308038,
                    },
                  ],
                  data: {
                    aggregateType: "CHART_AGGREGATE_TYPE_UNSPECIFIED",
                    columnReference: {
                      name: "et",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "HOUR_MINUTE",
                      },
                      histogramRule: {
                        intervalSize: 15.100000,
                        maxValue: 57.200001,
                        minValue: 29.200001,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 2722355074036734667,
                          endRowIndex: 7550277848845758419,
                          sheetId: 5834679152800927041,
                          startColumnIndex: 1640575118181291160,
                          startRowIndex: 3595392816265841596,
                        },
                        {
                          endColumnIndex: 1400511868484483551,
                          endRowIndex: 6274423500151333937,
                          sheetId: 6641661218238906182,
                          startColumnIndex: 8242810407604297897,
                          startRowIndex: 3435257386766265744,
                        },
                      ],
                    },
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "quaerat",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "QUARTER",
                        },
                        histogramRule: {
                          intervalSize: 39.200001,
                          maxValue: 25.100000,
                          minValue: 85.199997,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 5091421005456493880,
                            endRowIndex: 7371818367373788826,
                            sheetId: 5794365763670655370,
                            startColumnIndex: 3600252144153275725,
                            startRowIndex: 7017013912571993021,
                          },
                        ],
                      },
                    },
                    placement: "BELOW",
                    textFormat: {
                      bold: false,
                      fontFamily: "eius",
                      fontSize: 6329432368251767444,
                      foregroundColor: {
                        alpha: 14.200000,
                        blue: 90.199997,
                        green: 26.100000,
                        red: 59.200001,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 88.199997,
                          blue: 22.100000,
                          green: 20.100000,
                          red: 46.200001,
                        },
                        themeColor: "ACCENT4",
                      },
                      italic: true,
                      link: {
                        uri: "ab",
                      },
                      strikethrough: false,
                      underline: false,
                    },
                    type: "DATA",
                  },
                  hideTrailingSubtotal: false,
                  negativeColumnsStyle: {
                    color: {
                      alpha: 44.200001,
                      blue: 86.199997,
                      green: 36.200001,
                      red: 46.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 14.200000,
                        blue: 95.199997,
                        green: 11.200000,
                        red: 21.200001,
                      },
                      themeColor: "ACCENT3",
                    },
                    label: "commodi",
                  },
                  positiveColumnsStyle: {
                    color: {
                      alpha: 94.199997,
                      blue: 10.100000,
                      green: 0.100000,
                      red: 58.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 62.200001,
                        blue: 2.100000,
                        green: 13.200000,
                        red: 38.099998,
                      },
                      themeColor: "ACCENT6",
                    },
                    label: "minus",
                  },
                  subtotalColumnsStyle: {
                    color: {
                      alpha: 71.099998,
                      blue: 69.099998,
                      green: 29.200001,
                      red: 85.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 71.099998,
                        blue: 61.200001,
                        green: 57.200001,
                        red: 12.200000,
                      },
                      themeColor: "ACCENT3",
                    },
                    label: "eum",
                  },
                },
                {
                  customSubtotals: [
                    {
                      dataIsSubtotal: true,
                      label: "fuga",
                      subtotalIndex: 3014240134283831240,
                    },
                    {
                      dataIsSubtotal: false,
                      label: "inventore",
                      subtotalIndex: 26700421061466109,
                    },
                  ],
                  data: {
                    aggregateType: "MIN",
                    columnReference: {
                      name: "numquam",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "YEAR",
                      },
                      histogramRule: {
                        intervalSize: 35.200001,
                        maxValue: 28.100000,
                        minValue: 94.099998,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 3976356118512548799,
                          endRowIndex: 6039838416834263116,
                          sheetId: 4652339078842329112,
                          startColumnIndex: 7411969537780261032,
                          startRowIndex: 2710282476227438297,
                        },
                      ],
                    },
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "dolorem",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "YEAR_MONTH",
                        },
                        histogramRule: {
                          intervalSize: 96.099998,
                          maxValue: 39.099998,
                          minValue: 60.200001,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 4485275696227616666,
                            endRowIndex: 4865212716917641927,
                            sheetId: 1857104250745391486,
                            startColumnIndex: 3420659017898972296,
                            startRowIndex: 6657791057414474725,
                          },
                        ],
                      },
                    },
                    placement: "OUTSIDE_END",
                    textFormat: {
                      bold: false,
                      fontFamily: "neque",
                      fontSize: 593907781022105379,
                      foregroundColor: {
                        alpha: 39.099998,
                        blue: 24.100000,
                        green: 67.199997,
                        red: 44.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 77.199997,
                          blue: 72.099998,
                          green: 36.099998,
                          red: 76.199997,
                        },
                        themeColor: "ACCENT4",
                      },
                      italic: false,
                      link: {
                        uri: "ut",
                      },
                      strikethrough: true,
                      underline: true,
                    },
                    type: "CUSTOM",
                  },
                  hideTrailingSubtotal: true,
                  negativeColumnsStyle: {
                    color: {
                      alpha: 49.200001,
                      blue: 28.200001,
                      green: 76.199997,
                      red: 68.199997,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 22.200001,
                        blue: 52.200001,
                        green: 44.200001,
                        red: 17.100000,
                      },
                      themeColor: "ACCENT3",
                    },
                    label: "nemo",
                  },
                  positiveColumnsStyle: {
                    color: {
                      alpha: 19.200001,
                      blue: 78.099998,
                      green: 41.200001,
                      red: 46.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 61.099998,
                        blue: 29.200001,
                        green: 12.200000,
                        red: 49.200001,
                      },
                      themeColor: "LINK",
                    },
                    label: "eos",
                  },
                  subtotalColumnsStyle: {
                    color: {
                      alpha: 37.200001,
                      blue: 6.100000,
                      green: 77.099998,
                      red: 95.099998,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 65.199997,
                        blue: 23.200001,
                        green: 68.099998,
                        red: 5.200000,
                      },
                      themeColor: "ACCENT1",
                    },
                    label: "laudantium",
                  },
                },
                {
                  customSubtotals: [
                    {
                      dataIsSubtotal: true,
                      label: "ullam",
                      subtotalIndex: 8477135106783819851,
                    },
                  ],
                  data: {
                    aggregateType: "AVERAGE",
                    columnReference: {
                      name: "nesciunt",
                    },
                    groupRule: {
                      dateTimeRule: {
                        type: "DAY_MONTH",
                      },
                      histogramRule: {
                        intervalSize: 82.099998,
                        maxValue: 72.199997,
                        minValue: 67.199997,
                      },
                    },
                    sourceRange: {
                      sources: [
                        {
                          endColumnIndex: 8597391835536172556,
                          endRowIndex: 6079890481653474826,
                          sheetId: 5796157279906778001,
                          startColumnIndex: 1726886887317390883,
                          startRowIndex: 30854301985664243,
                        },
                      ],
                    },
                  },
                  dataLabel: {
                    customLabelData: {
                      aggregateType: "COUNT",
                      columnReference: {
                        name: "qui",
                      },
                      groupRule: {
                        dateTimeRule: {
                          type: "DAY_OF_WEEK",
                        },
                        histogramRule: {
                          intervalSize: 90.099998,
                          maxValue: 93.199997,
                          minValue: 24.100000,
                        },
                      },
                      sourceRange: {
                        sources: [
                          {
                            endColumnIndex: 1669496313350263098,
                            endRowIndex: 3567920655414896135,
                            sheetId: 4915372763925234918,
                            startColumnIndex: 3918271967178039934,
                            startRowIndex: 6576188116819131959,
                          },
                          {
                            endColumnIndex: 3285507171039437303,
                            endRowIndex: 3966581132377444704,
                            sheetId: 8761328384789903304,
                            startColumnIndex: 3211122497629424208,
                            startRowIndex: 1715135593737292908,
                          },
                          {
                            endColumnIndex: 5611965020937386520,
                            endRowIndex: 439821931601398506,
                            sheetId: 9116938031497566962,
                            startColumnIndex: 7969501865147412652,
                            startRowIndex: 6959927693520292988,
                          },
                        ],
                      },
                    },
                    placement: "OUTSIDE_END",
                    textFormat: {
                      bold: false,
                      fontFamily: "consectetur",
                      fontSize: 2947225473465758160,
                      foregroundColor: {
                        alpha: 16.200001,
                        blue: 48.099998,
                        green: 29.100000,
                        red: 85.099998,
                      },
                      foregroundColorStyle: {
                        rgbColor: {
                          alpha: 97.199997,
                          blue: 81.199997,
                          green: 17.200001,
                          red: 87.199997,
                        },
                        themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                      },
                      italic: false,
                      link: {
                        uri: "ipsam",
                      },
                      strikethrough: false,
                      underline: true,
                    },
                    type: "DATA_LABEL_TYPE_UNSPECIFIED",
                  },
                  hideTrailingSubtotal: true,
                  negativeColumnsStyle: {
                    color: {
                      alpha: 82.099998,
                      blue: 91.099998,
                      green: 35.200001,
                      red: 22.100000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 42.200001,
                        blue: 15.100000,
                        green: 90.199997,
                        red: 67.099998,
                      },
                      themeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                    },
                    label: "doloribus",
                  },
                  positiveColumnsStyle: {
                    color: {
                      alpha: 95.099998,
                      blue: 39.200001,
                      green: 12.200000,
                      red: 10.200000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 8.200000,
                        blue: 48.200001,
                        green: 16.200001,
                        red: 13.200000,
                      },
                      themeColor: "TEXT",
                    },
                    label: "fuga",
                  },
                  subtotalColumnsStyle: {
                    color: {
                      alpha: 67.099998,
                      blue: 17.200001,
                      green: 89.099998,
                      red: 3.100000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 62.099998,
                        blue: 87.199997,
                        green: 67.199997,
                        red: 40.099998,
                      },
                      themeColor: "ACCENT4",
                    },
                    label: "nesciunt",
                  },
                },
              ],
              stackedType: "WATERFALL_STACKED_TYPE_UNSPECIFIED",
              totalDataLabel: {
                customLabelData: {
                  aggregateType: "SUM",
                  columnReference: {
                    name: "nisi",
                  },
                  groupRule: {
                    dateTimeRule: {
                      type: "SECOND",
                    },
                    histogramRule: {
                      intervalSize: 52.200001,
                      maxValue: 36.200001,
                      minValue: 58.200001,
                    },
                  },
                  sourceRange: {
                    sources: [
                      {
                        endColumnIndex: 8186445018693495555,
                        endRowIndex: 6716014744037120589,
                        sheetId: 4905540894919748318,
                        startColumnIndex: 4102333967320392124,
                        startRowIndex: 8016911350752470637,
                      },
                      {
                        endColumnIndex: 3764429451146516528,
                        endRowIndex: 3827580057684947912,
                        sheetId: 5776940683629045286,
                        startColumnIndex: 3133958537886642191,
                        startRowIndex: 6065467671542863000,
                      },
                    ],
                  },
                },
                placement: "OUTSIDE_END",
                textFormat: {
                  bold: true,
                  fontFamily: "laborum",
                  fontSize: 3616242512139701239,
                  foregroundColor: {
                    alpha: 31.100000,
                    blue: 47.200001,
                    green: 80.099998,
                    red: 20.200001,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 83.099998,
                      blue: 30.100000,
                      green: 16.100000,
                      red: 77.199997,
                    },
                    themeColor: "ACCENT6",
                  },
                  italic: true,
                  link: {
                    uri: "illo",
                  },
                  strikethrough: true,
                  underline: false,
                },
                type: "CUSTOM",
              },
            },
          },
        },
        updateConditionalFormatRule: {
          index: 8705596652379846434,
          newIndex: 2769857374351855203,
          rule: {
            booleanRule: {
              condition: {
                type: "NUMBER_NOT_BETWEEN",
                values: [
                  {
                    relativeDate: "PAST_WEEK",
                    userEnteredValue: "fugit",
                  },
                  {
                    relativeDate: "PAST_WEEK",
                    userEnteredValue: "autem",
                  },
                  {
                    relativeDate: "PAST_YEAR",
                    userEnteredValue: "eum",
                  },
                ],
              },
              format: {
                backgroundColor: {
                  alpha: 86.099998,
                  blue: 91.099998,
                  green: 83.199997,
                  red: 82.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 84.099998,
                    blue: 54.200001,
                    green: 97.099998,
                    red: 33.200001,
                  },
                  themeColor: "TEXT",
                },
                borders: {
                  bottom: {
                    color: {
                      alpha: 0.200000,
                      blue: 44.099998,
                      green: 80.099998,
                      red: 8.100000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 4.100000,
                        blue: 33.200001,
                        green: 17.200001,
                        red: 25.200001,
                      },
                      themeColor: "ACCENT3",
                    },
                    style: "STYLE_UNSPECIFIED",
                    width: 2074703616606134029,
                  },
                  left: {
                    color: {
                      alpha: 76.199997,
                      blue: 77.099998,
                      green: 59.200001,
                      red: 60.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 7.200000,
                        blue: 32.099998,
                        green: 14.200000,
                        red: 33.099998,
                      },
                      themeColor: "BACKGROUND",
                    },
                    style: "STYLE_UNSPECIFIED",
                    width: 7502047453069565925,
                  },
                  right: {
                    color: {
                      alpha: 32.099998,
                      blue: 0.200000,
                      green: 40.099998,
                      red: 2.100000,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 94.199997,
                        blue: 21.100000,
                        green: 51.200001,
                        red: 89.199997,
                      },
                      themeColor: "ACCENT5",
                    },
                    style: "SOLID_THICK",
                    width: 2987065126006518480,
                  },
                  top: {
                    color: {
                      alpha: 8.200000,
                      blue: 94.099998,
                      green: 64.099998,
                      red: 32.200001,
                    },
                    colorStyle: {
                      rgbColor: {
                        alpha: 80.099998,
                        blue: 47.200001,
                        green: 9.200000,
                        red: 31.200001,
                      },
                      themeColor: "ACCENT3",
                    },
                    style: "NONE",
                    width: 3751689956360019028,
                  },
                },
                horizontalAlignment: "HORIZONTAL_ALIGN_UNSPECIFIED",
                hyperlinkDisplayType: "LINKED",
                numberFormat: {
                  pattern: "qui",
                  type: "DATE_TIME",
                },
                padding: {
                  bottom: 7761243867871891262,
                  left: 4579363413201336015,
                  right: 7529558415128020835,
                  top: 3964979404682395111,
                },
                textDirection: "RIGHT_TO_LEFT",
                textFormat: {
                  bold: false,
                  fontFamily: "unde",
                  fontSize: 7016176757666494278,
                  foregroundColor: {
                    alpha: 21.100000,
                    blue: 62.099998,
                    green: 60.099998,
                    red: 84.199997,
                  },
                  foregroundColorStyle: {
                    rgbColor: {
                      alpha: 80.099998,
                      blue: 94.099998,
                      green: 61.200001,
                      red: 98.099998,
                    },
                    themeColor: "LINK",
                  },
                  italic: false,
                  link: {
                    uri: "aut",
                  },
                  strikethrough: false,
                  underline: true,
                },
                textRotation: {
                  angle: 6755628126086966290,
                  vertical: false,
                },
                verticalAlignment: "TOP",
                wrapStrategy: "CLIP",
              },
            },
            gradientRule: {
              maxpoint: {
                color: {
                  alpha: 4.200000,
                  blue: 63.200001,
                  green: 13.100000,
                  red: 80.199997,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 9.100000,
                    blue: 83.199997,
                    green: 88.199997,
                    red: 57.099998,
                  },
                  themeColor: "ACCENT4",
                },
                type: "MIN",
                value: "consequuntur",
              },
              midpoint: {
                color: {
                  alpha: 28.100000,
                  blue: 37.099998,
                  green: 26.200001,
                  red: 46.099998,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 1.100000,
                    blue: 46.099998,
                    green: 22.100000,
                    red: 50.099998,
                  },
                  themeColor: "BACKGROUND",
                },
                type: "MAX",
                value: "quo",
              },
              minpoint: {
                color: {
                  alpha: 36.099998,
                  blue: 68.099998,
                  green: 12.200000,
                  red: 21.200001,
                },
                colorStyle: {
                  rgbColor: {
                    alpha: 47.200001,
                    blue: 31.100000,
                    green: 68.199997,
                    red: 24.100000,
                  },
                  themeColor: "ACCENT5",
                },
                type: "PERCENTILE",
                value: "quo",
              },
            },
            ranges: [
              {
                endColumnIndex: 2393815039606866404,
                endRowIndex: 4381152554013161444,
                sheetId: 2979757391317738643,
                startColumnIndex: 648062276138701891,
                startRowIndex: 2201570925319727200,
              },
              {
                endColumnIndex: 7137890692129760089,
                endRowIndex: 3074878451027530583,
                sheetId: 6905670222252052784,
                startColumnIndex: 3678479760516749535,
                startRowIndex: 9030212012783024859,
              },
              {
                endColumnIndex: 2831448160590726239,
                endRowIndex: 3720035398412791301,
                sheetId: 8353561274546920668,
                startColumnIndex: 2905739446447980069,
                startRowIndex: 7713259356506952805,
              },
            ],
          },
          sheetId: 9001856253250344012,
        },
        updateDataSource: {
          dataSource: {
            calculatedColumns: [
              {
                formula: "ut",
                reference: {
                  name: "natus",
                },
              },
              {
                formula: "tenetur",
                reference: {
                  name: "voluptatum",
                },
              },
            ],
            dataSourceId: "corporis",
            sheetId: 3886163101502044692,
            spec: {
              bigQuery: {
                projectId: "praesentium",
                querySpec: {
                  rawQuery: "nesciunt",
                },
                tableSpec: {
                  datasetId: "aut",
                  tableId: "autem",
                  tableProjectId: "nobis",
                },
              },
              parameters: [
                {
                  name: "voluptas",
                  namedRangeId: "voluptates",
                  range: {
                    endColumnIndex: 5488845664015916100,
                    endRowIndex: 1644050985095971085,
                    sheetId: 8119062164266405651,
                    startColumnIndex: 9086119933112965402,
                    startRowIndex: 6215908135997757487,
                  },
                },
                {
                  name: "neque",
                  namedRangeId: "sint",
                  range: {
                    endColumnIndex: 9011294638696331887,
                    endRowIndex: 7620002851523097826,
                    sheetId: 4671660144629685703,
                    startColumnIndex: 2011601226316739954,
                    startRowIndex: 4218161995604981301,
                  },
                },
                {
                  name: "consequatur",
                  namedRangeId: "aliquid",
                  range: {
                    endColumnIndex: 4318809954394503011,
                    endRowIndex: 2537150550735306370,
                    sheetId: 2836522965073831631,
                    startColumnIndex: 4021377681325577535,
                    startRowIndex: 8986691922693001040,
                  },
                },
              ],
            },
          },
          fields: "exercitationem",
        },
        updateDeveloperMetadata: {
          dataFilters: [
            {
              a1Range: "similique",
              developerMetadataLookup: {
                locationMatchingStrategy: "INTERSECTING_LOCATION",
                locationType: "COLUMN",
                metadataId: 3019650129971257652,
                metadataKey: "sapiente",
                metadataLocation: {
                  dimensionRange: {
                    dimension: "ROWS",
                    endIndex: 7705720495857172794,
                    sheetId: 31095505143140408,
                    startIndex: 342569671538393807,
                  },
                  locationType: "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
                  sheetId: 3208149562044819646,
                  spreadsheet: false,
                },
                metadataValue: "ab",
                visibility: "DOCUMENT",
              },
              gridRange: {
                endColumnIndex: 8629970773779889272,
                endRowIndex: 33905830031471879,
                sheetId: 1278605369818567010,
                startColumnIndex: 905552395390873518,
                startRowIndex: 1687589039418997057,
              },
            },
          ],
          developerMetadata: {
            location: {
              dimensionRange: {
                dimension: "COLUMNS",
                endIndex: 1563670643051245400,
                sheetId: 4578800959387052565,
                startIndex: 8029831661990470346,
              },
              locationType: "SPREADSHEET",
              sheetId: 7958938591821607167,
              spreadsheet: true,
            },
            metadataId: 6940788645934065110,
            metadataKey: "hic",
            metadataValue: "maiores",
            visibility: "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
          },
          fields: "molestiae",
        },
        updateDimensionGroup: {
          dimensionGroup: {
            collapsed: true,
            depth: 4274584226917309227,
            range: {
              dimension: "ROWS",
              endIndex: 4790319718862542235,
              sheetId: 1453941536420970316,
              startIndex: 1769991230487554413,
            },
          },
          fields: "recusandae",
        },
        updateDimensionProperties: {
          dataSourceSheetRange: {
            columnReferences: [
              {
                name: "et",
              },
            ],
            sheetId: 5999606754405301473,
          },
          fields: "tempora",
          properties: {
            dataSourceColumnReference: {
              name: "dolorem",
            },
            developerMetadata: [
              {
                location: {
                  dimensionRange: {
                    dimension: "COLUMNS",
                    endIndex: 6829914066148981673,
                    sheetId: 758182369748980316,
                    startIndex: 3204868706869101308,
                  },
                  locationType: "COLUMN",
                  sheetId: 4854931965959473005,
                  spreadsheet: false,
                },
                metadataId: 6955614035945997567,
                metadataKey: "unde",
                metadataValue: "soluta",
                visibility: "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
              },
              {
                location: {
                  dimensionRange: {
                    dimension: "COLUMNS",
                    endIndex: 4530744870407806053,
                    sheetId: 8645731215911517059,
                    startIndex: 267733270693455978,
                  },
                  locationType: "SHEET",
                  sheetId: 5354004196691378404,
                  spreadsheet: true,
                },
                metadataId: 6426649722693878116,
                metadataKey: "omnis",
                metadataValue: "aspernatur",
                visibility: "DEVELOPER_METADATA_VISIBILITY_UNSPECIFIED",
              },
              {
                location: {
                  dimensionRange: {
                    dimension: "DIMENSION_UNSPECIFIED",
                    endIndex: 3541072075740397155,
                    sheetId: 4799205076589395140,
                    startIndex: 5413389742272298298,
                  },
                  locationType: "DEVELOPER_METADATA_LOCATION_TYPE_UNSPECIFIED",
                  sheetId: 8057744838712729175,
                  spreadsheet: true,
                },
                metadataId: 6203622138768548955,
                metadataKey: "velit",
                metadataValue: "velit",
                visibility: "DOCUMENT",
              },
            ],
            hiddenByFilter: false,
            hiddenByUser: false,
            pixelSize: 3094999222456762784,
          },
          range: {
            dimension: "DIMENSION_UNSPECIFIED",
            endIndex: 2239213883644352144,
            sheetId: 3540866909785183089,
            startIndex: 9213649705018420877,
          },
        },
        updateEmbeddedObjectBorder: {
          border: {
            color: {
              alpha: 44.099998,
              blue: 94.199997,
              green: 46.099998,
              red: 44.099998,
            },
            colorStyle: {
              rgbColor: {
                alpha: 88.099998,
                blue: 93.099998,
                green: 6.200000,
                red: 83.099998,
              },
              themeColor: "TEXT",
            },
          },
          fields: "minus",
          objectId: 5526093172992595338,
        },
        updateEmbeddedObjectPosition: {
          fields: "impedit",
          newPosition: {
            newSheet: false,
            overlayPosition: {
              anchorCell: {
                columnIndex: 2717877549939375485,
                rowIndex: 8712353747405578230,
                sheetId: 6214696299323644363,
              },
              heightPixels: 5912334609066784204,
              offsetXPixels: 4881887526486978039,
              offsetYPixels: 2622894768490619933,
              widthPixels: 3719571644917311669,
            },
            sheetId: 2085938873096598873,
          },
          objectId: 5944637316242290914,
        },
        updateFilterView: {
          fields: "odit",
          filter: {
            criteria: {
              "consequuntur": {
                condition: {
                  type: "ONE_OF_LIST",
                  values: [
                    {
                      relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                      userEnteredValue: "illo",
                    },
                  ],
                },
                hiddenValues: [
                  "consectetur",
                ],
                visibleBackgroundColor: {
                  alpha: 33.099998,
                  blue: 7.100000,
                  green: 49.200001,
                  red: 14.100000,
                },
                visibleBackgroundColorStyle: {
                  rgbColor: {
                    alpha: 32.200001,
                    blue: 35.099998,
                    green: 65.199997,
                    red: 71.099998,
                  },
                  themeColor: "ACCENT5",
                },
                visibleForegroundColor: {
                  alpha: 77.199997,
                  blue: 15.100000,
                  green: 34.200001,
                  red: 72.099998,
                },
                visibleForegroundColorStyle: {
                  rgbColor: {
                    alpha: 30.200001,
                    blue: 79.099998,
                    green: 34.200001,
                    red: 47.099998,
                  },
                  themeColor: "BACKGROUND",
                },
              },
            },
            filterSpecs: [
              {
                columnIndex: 1015568774125248947,
                dataSourceColumnReference: {
                  name: "temporibus",
                },
                filterCriteria: {
                  condition: {
                    type: "NUMBER_NOT_BETWEEN",
                    values: [
                      {
                        relativeDate: "TOMORROW",
                        userEnteredValue: "voluptatem",
                      },
                      {
                        relativeDate: "TOMORROW",
                        userEnteredValue: "dolore",
                      },
                      {
                        relativeDate: "PAST_MONTH",
                        userEnteredValue: "consequatur",
                      },
                    ],
                  },
                  hiddenValues: [
                    "et",
                    "ullam",
                  ],
                  visibleBackgroundColor: {
                    alpha: 86.099998,
                    blue: 30.100000,
                    green: 53.200001,
                    red: 32.099998,
                  },
                  visibleBackgroundColorStyle: {
                    rgbColor: {
                      alpha: 34.200001,
                      blue: 66.199997,
                      green: 70.099998,
                      red: 46.200001,
                    },
                    themeColor: "TEXT",
                  },
                  visibleForegroundColor: {
                    alpha: 22.100000,
                    blue: 36.200001,
                    green: 81.099998,
                    red: 94.099998,
                  },
                  visibleForegroundColorStyle: {
                    rgbColor: {
                      alpha: 70.099998,
                      blue: 26.200001,
                      green: 95.099998,
                      red: 32.200001,
                    },
                    themeColor: "ACCENT6",
                  },
                },
              },
            ],
            filterViewId: 7777857279895251322,
            namedRangeId: "a",
            range: {
              endColumnIndex: 2983376473241184158,
              endRowIndex: 1111794554545339181,
              sheetId: 9094564647419426836,
              startColumnIndex: 6360756279769182318,
              startRowIndex: 2792911611924926571,
            },
            sortSpecs: [
              {
                backgroundColor: {
                  alpha: 12.100000,
                  blue: 39.099998,
                  green: 41.200001,
                  red: 99.099998,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 75.199997,
                    blue: 55.099998,
                    green: 99.099998,
                    red: 29.200001,
                  },
                  themeColor: "TEXT",
                },
                dataSourceColumnReference: {
                  name: "velit",
                },
                dimensionIndex: 8853348292938018450,
                foregroundColor: {
                  alpha: 40.099998,
                  blue: 72.199997,
                  green: 28.200001,
                  red: 26.100000,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 26.200001,
                    blue: 99.099998,
                    green: 75.199997,
                    red: 3.200000,
                  },
                  themeColor: "ACCENT3",
                },
                sortOrder: "ASCENDING",
              },
              {
                backgroundColor: {
                  alpha: 76.099998,
                  blue: 22.200001,
                  green: 53.200001,
                  red: 74.199997,
                },
                backgroundColorStyle: {
                  rgbColor: {
                    alpha: 86.199997,
                    blue: 55.099998,
                    green: 30.200001,
                    red: 12.200000,
                  },
                  themeColor: "ACCENT4",
                },
                dataSourceColumnReference: {
                  name: "quas",
                },
                dimensionIndex: 1521845685218457034,
                foregroundColor: {
                  alpha: 25.100000,
                  blue: 63.200001,
                  green: 24.100000,
                  red: 65.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 31.100000,
                    blue: 24.100000,
                    green: 54.200001,
                    red: 26.200001,
                  },
                  themeColor: "ACCENT3",
                },
                sortOrder: "DESCENDING",
              },
            ],
            title: "velit",
          },
        },
        updateNamedRange: {
          fields: "at",
          namedRange: {
            name: "facilis",
            namedRangeId: "sapiente",
            range: {
              endColumnIndex: 1933637001701741629,
              endRowIndex: 6076792164548585957,
              sheetId: 1654374057983772779,
              startColumnIndex: 2414006743850458088,
              startRowIndex: 8213216034401715748,
            },
          },
        },
        updateProtectedRange: {
          fields: "eligendi",
          protectedRange: {
            description: "excepturi",
            editors: {
              domainUsersCanEdit: true,
              groups: [
                "sit",
                "non",
                "sapiente",
              ],
              users: [
                "ea",
                "accusantium",
                "fugit",
              ],
            },
            namedRangeId: "aut",
            protectedRangeId: 2316326974523868357,
            range: {
              endColumnIndex: 8342268039593630807,
              endRowIndex: 3953145306720435188,
              sheetId: 1169424063060672689,
              startColumnIndex: 4617301919318929864,
              startRowIndex: 717855885431278206,
            },
            requestingUserCanEdit: false,
            unprotectedRanges: [
              {
                endColumnIndex: 3395293438125619572,
                endRowIndex: 9222672581385311700,
                sheetId: 5873232477748685708,
                startColumnIndex: 415029418843156361,
                startRowIndex: 8464692786836392933,
              },
              {
                endColumnIndex: 5530986028860979522,
                endRowIndex: 2347574673141817786,
                sheetId: 8182445495034454226,
                startColumnIndex: 1834575966411613883,
                startRowIndex: 13033066810561737,
              },
              {
                endColumnIndex: 1879927464360640031,
                endRowIndex: 1710300980824402508,
                sheetId: 2250216057475496333,
                startColumnIndex: 7664703408294448244,
                startRowIndex: 5487826850599604251,
              },
            ],
            warningOnly: false,
          },
        },
        updateSheetProperties: {
          fields: "quibusdam",
          properties: {
            dataSourceSheetProperties: {
              columns: [
                {
                  formula: "dolore",
                  reference: {
                    name: "repellendus",
                  },
                },
                {
                  formula: "aut",
                  reference: {
                    name: "unde",
                  },
                },
              ],
              dataExecutionStatus: {
                errorCode: "CONCURRENT_QUERY",
                errorMessage: "necessitatibus",
                lastRefreshTime: "repellendus",
                state: "FAILED",
              },
              dataSourceId: "consequatur",
            },
            gridProperties: {
              columnCount: 289136473805185959,
              columnGroupControlAfter: true,
              frozenColumnCount: 7614272640183066935,
              frozenRowCount: 543818391608668552,
              hideGridlines: false,
              rowCount: 4051641297599654018,
              rowGroupControlAfter: false,
            },
            hidden: true,
            index: 4512541318385412965,
            rightToLeft: true,
            sheetId: 3515043735423955078,
            sheetType: "DATA_SOURCE",
            tabColor: {
              alpha: 82.099998,
              blue: 16.200001,
              green: 86.199997,
              red: 76.099998,
            },
            tabColorStyle: {
              rgbColor: {
                alpha: 93.099998,
                blue: 18.100000,
                green: 80.199997,
                red: 49.200001,
              },
              themeColor: "ACCENT5",
            },
            title: "officiis",
          },
        },
        updateSlicerSpec: {
          fields: "eum",
          slicerId: 7682399421445927096,
          spec: {
            applyToPivotTables: false,
            backgroundColor: {
              alpha: 9.200000,
              blue: 85.199997,
              green: 68.099998,
              red: 4.100000,
            },
            backgroundColorStyle: {
              rgbColor: {
                alpha: 60.200001,
                blue: 77.199997,
                green: 23.100000,
                red: 77.099998,
              },
              themeColor: "ACCENT3",
            },
            columnIndex: 7791332398434821041,
            dataRange: {
              endColumnIndex: 5072164130413750271,
              endRowIndex: 2338474741780327438,
              sheetId: 864558461996499385,
              startColumnIndex: 8342101390318770561,
              startRowIndex: 1500601376990694835,
            },
            filterCriteria: {
              condition: {
                type: "NUMBER_GREATER_THAN_EQ",
                values: [
                  {
                    relativeDate: "PAST_MONTH",
                    userEnteredValue: "ullam",
                  },
                  {
                    relativeDate: "RELATIVE_DATE_UNSPECIFIED",
                    userEnteredValue: "rerum",
                  },
                ],
              },
              hiddenValues: [
                "optio",
              ],
              visibleBackgroundColor: {
                alpha: 4.100000,
                blue: 31.100000,
                green: 99.199997,
                red: 9.200000,
              },
              visibleBackgroundColorStyle: {
                rgbColor: {
                  alpha: 30.100000,
                  blue: 68.199997,
                  green: 65.099998,
                  red: 19.100000,
                },
                themeColor: "TEXT",
              },
              visibleForegroundColor: {
                alpha: 30.200001,
                blue: 19.200001,
                green: 23.100000,
                red: 65.099998,
              },
              visibleForegroundColorStyle: {
                rgbColor: {
                  alpha: 48.200001,
                  blue: 5.100000,
                  green: 95.199997,
                  red: 10.200000,
                },
                themeColor: "LINK",
              },
            },
            horizontalAlignment: "LEFT",
            textFormat: {
              bold: true,
              fontFamily: "quae",
              fontSize: 3076047156387976339,
              foregroundColor: {
                alpha: 24.200001,
                blue: 38.200001,
                green: 56.200001,
                red: 82.099998,
              },
              foregroundColorStyle: {
                rgbColor: {
                  alpha: 72.099998,
                  blue: 51.200001,
                  green: 99.099998,
                  red: 54.200001,
                },
                themeColor: "ACCENT5",
              },
              italic: true,
              link: {
                uri: "totam",
              },
              strikethrough: true,
              underline: true,
            },
            title: "perspiciatis",
          },
        },
        updateSpreadsheetProperties: {
          fields: "similique",
          properties: {
            autoRecalc: "ON_CHANGE",
            defaultFormat: {
              backgroundColor: {
                alpha: 58.200001,
                blue: 29.200001,
                green: 40.099998,
                red: 61.200001,
              },
              backgroundColorStyle: {
                rgbColor: {
                  alpha: 13.200000,
                  blue: 38.200001,
                  green: 10.200000,
                  red: 17.100000,
                },
                themeColor: "ACCENT6",
              },
              borders: {
                bottom: {
                  color: {
                    alpha: 10.100000,
                    blue: 59.099998,
                    green: 63.200001,
                    red: 88.099998,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 86.099998,
                      blue: 59.200001,
                      green: 48.200001,
                      red: 41.200001,
                    },
                    themeColor: "ACCENT4",
                  },
                  style: "DOUBLE",
                  width: 6210002834589751483,
                },
                left: {
                  color: {
                    alpha: 2.200000,
                    blue: 56.099998,
                    green: 16.200001,
                    red: 36.200001,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 45.099998,
                      blue: 60.099998,
                      green: 14.100000,
                      red: 30.200001,
                    },
                    themeColor: "ACCENT6",
                  },
                  style: "SOLID_THICK",
                  width: 2378353508606365373,
                },
                right: {
                  color: {
                    alpha: 60.099998,
                    blue: 34.200001,
                    green: 51.200001,
                    red: 29.100000,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 69.099998,
                      blue: 45.099998,
                      green: 88.099998,
                      red: 34.200001,
                    },
                    themeColor: "ACCENT3",
                  },
                  style: "STYLE_UNSPECIFIED",
                  width: 4020160592697994708,
                },
                top: {
                  color: {
                    alpha: 83.099998,
                    blue: 23.200001,
                    green: 97.099998,
                    red: 99.199997,
                  },
                  colorStyle: {
                    rgbColor: {
                      alpha: 4.200000,
                      blue: 98.099998,
                      green: 82.199997,
                      red: 4.100000,
                    },
                    themeColor: "ACCENT1",
                  },
                  style: "SOLID_THICK",
                  width: 4905534085523151538,
                },
              },
              horizontalAlignment: "LEFT",
              hyperlinkDisplayType: "LINKED",
              numberFormat: {
                pattern: "odit",
                type: "NUMBER",
              },
              padding: {
                bottom: 5374409456396564080,
                left: 1544195981542602948,
                right: 1895583443994920009,
                top: 5110329905227574134,
              },
              textDirection: "RIGHT_TO_LEFT",
              textFormat: {
                bold: true,
                fontFamily: "reprehenderit",
                fontSize: 5772704519363125794,
                foregroundColor: {
                  alpha: 57.099998,
                  blue: 34.099998,
                  green: 37.099998,
                  red: 32.099998,
                },
                foregroundColorStyle: {
                  rgbColor: {
                    alpha: 54.099998,
                    blue: 24.200001,
                    green: 16.100000,
                    red: 22.100000,
                  },
                  themeColor: "ACCENT5",
                },
                italic: false,
                link: {
                  uri: "voluptatem",
                },
                strikethrough: true,
                underline: false,
              },
              textRotation: {
                angle: 7019234817771503489,
                vertical: true,
              },
              verticalAlignment: "BOTTOM",
              wrapStrategy: "WRAP_STRATEGY_UNSPECIFIED",
            },
            iterativeCalculationSettings: {
              convergenceThreshold: 96.199997,
              maxIterations: 4787366608210802703,
            },
            locale: "ea",
            spreadsheetTheme: {
              primaryFontFamily: "quia",
              themeColors: [
                {
                  color: {
                    rgbColor: {
                      alpha: 38.099998,
                      blue: 89.099998,
                      green: 17.200001,
                      red: 30.200001,
                    },
                    themeColor: "BACKGROUND",
                  },
                  colorType: "ACCENT3",
                },
                {
                  color: {
                    rgbColor: {
                      alpha: 62.099998,
                      blue: 75.099998,
                      green: 49.200001,
                      red: 53.200001,
                    },
                    themeColor: "ACCENT1",
                  },
                  colorType: "ACCENT4",
                },
                {
                  color: {
                    rgbColor: {
                      alpha: 38.099998,
                      blue: 77.099998,
                      green: 80.199997,
                      red: 32.099998,
                    },
                    themeColor: "ACCENT1",
                  },
                  colorType: "THEME_COLOR_TYPE_UNSPECIFIED",
                },
              ],
            },
            timeZone: "magnam",
            title: "modi",
          },
        },
      },
    ],
    responseIncludeGridData: true,
    responseRanges: [
      "aspernatur",
    ],
  },
};

sdk.spreadsheets.sheetsSpreadsheetsBatchUpdate(req).then((res: SheetsSpreadsheetsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### spreadsheets

* `sheetsSpreadsheetsBatchUpdate` - Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
* `sheetsSpreadsheetsCreate` - Creates a spreadsheet, returning the newly created spreadsheet.
* `sheetsSpreadsheetsDeveloperMetadataGet` - Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
* `sheetsSpreadsheetsDeveloperMetadataSearch` - Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
* `sheetsSpreadsheetsGet` - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
* `sheetsSpreadsheetsGetByDataFilter` - Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a field mask listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
* `sheetsSpreadsheetsSheetsCopyTo` - Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
* `sheetsSpreadsheetsValuesAppend` - Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](/sheets/api/guides/values#appending_values) and [sample code](/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
* `sheetsSpreadsheetsValuesBatchClear` - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
* `sheetsSpreadsheetsValuesBatchClearByDataFilter` - Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* `sheetsSpreadsheetsValuesBatchGet` - Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
* `sheetsSpreadsheetsValuesBatchGetByDataFilter` - Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
* `sheetsSpreadsheetsValuesBatchUpdate` - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
* `sheetsSpreadsheetsValuesBatchUpdateByDataFilter` - Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
* `sheetsSpreadsheetsValuesClear` - Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
* `sheetsSpreadsheetsValuesGet` - Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
* `sheetsSpreadsheetsValuesUpdate` - Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
