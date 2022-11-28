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
import { FormsFormsBatchUpdateRequest, FormsFormsBatchUpdateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: FormsFormsBatchUpdateRequest = {
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
    formId: "blanditiis",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "doloremque",
    alt: "proto",
    callback: "nulla",
    fields: "est",
    key: "fuga",
    oauthToken: "inventore",
    prettyPrint: false,
    quotaUser: "dolorem",
    uploadType: "quos",
    uploadProtocol: "similique",
  },
  request: {
    includeFormInResponse: true,
    requests: [
      {
        createItem: {
          item: {
            description: "accusantium",
            imageItem: {
              image: {
                altText: "blanditiis",
                properties: {
                  alignment: "LEFT",
                  width: 6367668452330419632,
                },
                sourceUri: "harum",
              },
            },
            itemId: "id",
            pageBreakItem: {
              "commodi": "voluptas",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: "RESTART_FORM",
                      goToSectionId: "doloribus",
                      image: {
                        altText: "nulla",
                        properties: {
                          alignment: "CENTER",
                          width: 3887418951089824439,
                        },
                        sourceUri: "alias",
                      },
                      isOther: true,
                      value: "voluptatem",
                    },
                    {
                      goToAction: "SUBMIT_FORM",
                      goToSectionId: "dolores",
                      image: {
                        altText: "dicta",
                        properties: {
                          alignment: "CENTER",
                          width: 2571576639404732481,
                        },
                        sourceUri: "ut",
                      },
                      isOther: false,
                      value: "vel",
                    },
                    {
                      goToAction: "NEXT_SECTION",
                      goToSectionId: "ut",
                      image: {
                        altText: "provident",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 3210642949273039304,
                        },
                        sourceUri: "sit",
                      },
                      isOther: false,
                      value: "delectus",
                    },
                  ],
                  shuffle: false,
                  type: "DROP_DOWN",
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "quo",
                properties: {
                  alignment: "RIGHT",
                  width: 1612920053756266126,
                },
                sourceUri: "vitae",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "reiciendis",
                        image: {
                          altText: "velit",
                          properties: {
                            alignment: "CENTER",
                            width: 2152318449603758279,
                          },
                          sourceUri: "enim",
                        },
                        isOther: false,
                        value: "et",
                      },
                      {
                        goToAction: "RESTART_FORM",
                        goToSectionId: "vitae",
                        image: {
                          altText: "asperiores",
                          properties: {
                            alignment: "RIGHT",
                            width: 2887366195971768826,
                          },
                          sourceUri: "quibusdam",
                        },
                        isOther: true,
                        value: "totam",
                      },
                    ],
                    shuffle: false,
                    type: "CHECKBOX",
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: true,
                  },
                  fileUploadQuestion: {
                    folderId: "unde",
                    maxFileSize: "facilis",
                    maxFiles: 5917731321530822737,
                    types: [
                      "VIDEO",
                      "SPREADSHEET",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "qui",
                        },
                        {
                          value: "voluptas",
                        },
                        {
                          value: "quo",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "sit",
                            uri: "doloribus",
                          },
                          video: {
                            displayText: "et",
                            youtubeUri: "eveniet",
                          },
                        },
                      ],
                      text: "assumenda",
                    },
                    pointValue: 5793950756465005265,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "illum",
                            uri: "rem",
                          },
                          video: {
                            displayText: "voluptatem",
                            youtubeUri: "est",
                          },
                        },
                        {
                          link: {
                            displayText: "sunt",
                            uri: "quo",
                          },
                          video: {
                            displayText: "voluptatum",
                            youtubeUri: "doloremque",
                          },
                        },
                      ],
                      text: "ut",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "et",
                            uri: "reiciendis",
                          },
                          video: {
                            displayText: "eveniet",
                            youtubeUri: "et",
                          },
                        },
                      ],
                      text: "quia",
                    },
                  },
                  questionId: "dicta",
                  required: false,
                  rowQuestion: {
                    title: "voluptas",
                  },
                  scaleQuestion: {
                    high: 8588093541192860205,
                    highLabel: "accusantium",
                    low: 2750849625064778423,
                    lowLabel: "sapiente",
                  },
                  textQuestion: {
                    paragraph: true,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "autem",
                        image: {
                          altText: "ad",
                          properties: {
                            alignment: "RIGHT",
                            width: 1530206793438036833,
                          },
                          sourceUri: "esse",
                        },
                        isOther: true,
                        value: "quia",
                      },
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "cupiditate",
                        image: {
                          altText: "qui",
                          properties: {
                            alignment: "LEFT",
                            width: 4166502192664085675,
                          },
                          sourceUri: "dolorum",
                        },
                        isOther: true,
                        value: "doloribus",
                      },
                      {
                        goToAction: "NEXT_SECTION",
                        goToSectionId: "eum",
                        image: {
                          altText: "fuga",
                          properties: {
                            alignment: "CENTER",
                            width: 3699705278671025332,
                          },
                          sourceUri: "assumenda",
                        },
                        isOther: true,
                        value: "magni",
                      },
                    ],
                    shuffle: false,
                    type: "CHOICE_TYPE_UNSPECIFIED",
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "voluptas",
                    maxFileSize: "et",
                    maxFiles: 5065495399618875749,
                    types: [
                      "IMAGE",
                      "FILE_TYPE_UNSPECIFIED",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "ullam",
                        },
                        {
                          value: "rerum",
                        },
                        {
                          value: "animi",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "ea",
                            uri: "nihil",
                          },
                          video: {
                            displayText: "suscipit",
                            youtubeUri: "vel",
                          },
                        },
                        {
                          link: {
                            displayText: "commodi",
                            uri: "sint",
                          },
                          video: {
                            displayText: "nobis",
                            youtubeUri: "voluptatem",
                          },
                        },
                        {
                          link: {
                            displayText: "eligendi",
                            uri: "ratione",
                          },
                          video: {
                            displayText: "exercitationem",
                            youtubeUri: "rerum",
                          },
                        },
                      ],
                      text: "voluptatem",
                    },
                    pointValue: 6630029552617051383,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "sunt",
                            uri: "ullam",
                          },
                          video: {
                            displayText: "similique",
                            youtubeUri: "nam",
                          },
                        },
                        {
                          link: {
                            displayText: "enim",
                            uri: "est",
                          },
                          video: {
                            displayText: "voluptas",
                            youtubeUri: "et",
                          },
                        },
                      ],
                      text: "et",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "dolorem",
                            uri: "sit",
                          },
                          video: {
                            displayText: "id",
                            youtubeUri: "a",
                          },
                        },
                        {
                          link: {
                            displayText: "nulla",
                            uri: "blanditiis",
                          },
                          video: {
                            displayText: "sit",
                            youtubeUri: "perspiciatis",
                          },
                        },
                        {
                          link: {
                            displayText: "corporis",
                            uri: "recusandae",
                          },
                          video: {
                            displayText: "delectus",
                            youtubeUri: "eos",
                          },
                        },
                      ],
                      text: "iure",
                    },
                  },
                  questionId: "culpa",
                  required: false,
                  rowQuestion: {
                    title: "aut",
                  },
                  scaleQuestion: {
                    high: 8883499301485783187,
                    highLabel: "nesciunt",
                    low: 8592792957227080212,
                    lowLabel: "ut",
                  },
                  textQuestion: {
                    paragraph: true,
                  },
                  timeQuestion: {
                    duration: true,
                  },
                },
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "iste",
                        image: {
                          altText: "et",
                          properties: {
                            alignment: "ALIGNMENT_UNSPECIFIED",
                            width: 3385703925298031216,
                          },
                          sourceUri: "quam",
                        },
                        isOther: true,
                        value: "eos",
                      },
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "incidunt",
                        image: {
                          altText: "odio",
                          properties: {
                            alignment: "LEFT",
                            width: 4538443254300990071,
                          },
                          sourceUri: "error",
                        },
                        isOther: false,
                        value: "beatae",
                      },
                    ],
                    shuffle: true,
                    type: "RADIO",
                  },
                  dateQuestion: {
                    includeTime: true,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "quia",
                    maxFileSize: "facilis",
                    maxFiles: 7651563257997919332,
                    types: [
                      "DRAWING",
                      "PRESENTATION",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "autem",
                        },
                        {
                          value: "at",
                        },
                        {
                          value: "sed",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "reprehenderit",
                            uri: "ea",
                          },
                          video: {
                            displayText: "dolorem",
                            youtubeUri: "autem",
                          },
                        },
                      ],
                      text: "nisi",
                    },
                    pointValue: 1293501408407461825,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "repudiandae",
                            uri: "non",
                          },
                          video: {
                            displayText: "aut",
                            youtubeUri: "ut",
                          },
                        },
                      ],
                      text: "ea",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "necessitatibus",
                            uri: "est",
                          },
                          video: {
                            displayText: "ut",
                            youtubeUri: "voluptas",
                          },
                        },
                        {
                          link: {
                            displayText: "voluptatem",
                            uri: "et",
                          },
                          video: {
                            displayText: "consequatur",
                            youtubeUri: "odit",
                          },
                        },
                      ],
                      text: "unde",
                    },
                  },
                  questionId: "omnis",
                  required: false,
                  rowQuestion: {
                    title: "iusto",
                  },
                  scaleQuestion: {
                    high: 178528086225314371,
                    highLabel: "autem",
                    low: 5523822080997069527,
                    lowLabel: "similique",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: true,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "libero",
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 4671827097790621909,
                },
                sourceUri: "voluptatum",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: "RESTART_FORM",
                      goToSectionId: "officia",
                      image: {
                        altText: "architecto",
                        properties: {
                          alignment: "LEFT",
                          width: 2100143270353897595,
                        },
                        sourceUri: "in",
                      },
                      isOther: false,
                      value: "beatae",
                    },
                    {
                      goToAction: "RESTART_FORM",
                      goToSectionId: "beatae",
                      image: {
                        altText: "voluptate",
                        properties: {
                          alignment: "CENTER",
                          width: 6160806195183941617,
                        },
                        sourceUri: "sequi",
                      },
                      isOther: true,
                      value: "ipsam",
                    },
                  ],
                  shuffle: true,
                  type: "DROP_DOWN",
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: true,
                },
                fileUploadQuestion: {
                  folderId: "dolores",
                  maxFileSize: "voluptas",
                  maxFiles: 3821450622976919731,
                  types: [
                    "ANY",
                    "DRAWING",
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "eum",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "suscipit",
                          uri: "excepturi",
                        },
                        video: {
                          displayText: "laborum",
                          youtubeUri: "iure",
                        },
                      },
                    ],
                    text: "reprehenderit",
                  },
                  pointValue: 4401454000593110478,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "et",
                          uri: "quo",
                        },
                        video: {
                          displayText: "reprehenderit",
                          youtubeUri: "repellendus",
                        },
                      },
                      {
                        link: {
                          displayText: "vero",
                          uri: "eveniet",
                        },
                        video: {
                          displayText: "omnis",
                          youtubeUri: "delectus",
                        },
                      },
                      {
                        link: {
                          displayText: "quasi",
                          uri: "voluptates",
                        },
                        video: {
                          displayText: "eligendi",
                          youtubeUri: "sint",
                        },
                      },
                    ],
                    text: "deserunt",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "ut",
                          uri: "omnis",
                        },
                        video: {
                          displayText: "assumenda",
                          youtubeUri: "earum",
                        },
                      },
                    ],
                    text: "eum",
                  },
                },
                questionId: "ut",
                required: true,
                rowQuestion: {
                  title: "sit",
                },
                scaleQuestion: {
                  high: 3773208962586552143,
                  highLabel: "architecto",
                  low: 5512792728107327134,
                  lowLabel: "et",
                },
                textQuestion: {
                  paragraph: false,
                },
                timeQuestion: {
                  duration: true,
                },
              },
            },
            textItem: {
              "et": "consequatur",
              "molestiae": "corrupti",
              "veniam": "dolorem",
            },
            title: "magnam",
            videoItem: {
              caption: "est",
              video: {
                properties: {
                  alignment: "CENTER",
                  width: 6220347428525113494,
                },
                youtubeUri: "sunt",
              },
            },
          },
          location: {
            index: 6539930946701384664,
          },
        },
        deleteItem: {
          location: {
            index: 1979148960994744380,
          },
        },
        moveItem: {
          newLocation: {
            index: 5006807331309778843,
          },
          originalLocation: {
            index: 7842360832936955031,
          },
        },
        updateFormInfo: {
          info: {
            description: "quam",
            title: "quas",
          },
          updateMask: "id",
        },
        updateItem: {
          item: {
            description: "consectetur",
            imageItem: {
              image: {
                altText: "in",
                properties: {
                  alignment: "LEFT",
                  width: 1189604837382641522,
                },
                sourceUri: "sed",
              },
            },
            itemId: "velit",
            pageBreakItem: {
              "recusandae": "commodi",
              "eius": "dolore",
              "a": "et",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: "GO_TO_ACTION_UNSPECIFIED",
                      goToSectionId: "excepturi",
                      image: {
                        altText: "est",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 6462757265347799921,
                        },
                        sourceUri: "nam",
                      },
                      isOther: true,
                      value: "aut",
                    },
                  ],
                  shuffle: false,
                  type: "CHOICE_TYPE_UNSPECIFIED",
                },
                shuffleQuestions: true,
              },
              image: {
                altText: "sed",
                properties: {
                  alignment: "RIGHT",
                  width: 6847449149842679249,
                },
                sourceUri: "ut",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "animi",
                        image: {
                          altText: "nam",
                          properties: {
                            alignment: "CENTER",
                            width: 1656220335320334169,
                          },
                          sourceUri: "ipsa",
                        },
                        isOther: false,
                        value: "consequatur",
                      },
                      {
                        goToAction: "NEXT_SECTION",
                        goToSectionId: "hic",
                        image: {
                          altText: "veritatis",
                          properties: {
                            alignment: "RIGHT",
                            width: 4692652398842461517,
                          },
                          sourceUri: "vel",
                        },
                        isOther: false,
                        value: "odit",
                      },
                    ],
                    shuffle: false,
                    type: "CHECKBOX",
                  },
                  dateQuestion: {
                    includeTime: true,
                    includeYear: true,
                  },
                  fileUploadQuestion: {
                    folderId: "nisi",
                    maxFileSize: "nulla",
                    maxFiles: 5203196856441168768,
                    types: [
                      "DRAWING",
                      "ANY",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "et",
                        },
                        {
                          value: "dignissimos",
                        },
                        {
                          value: "deleniti",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "id",
                            uri: "sunt",
                          },
                          video: {
                            displayText: "cum",
                            youtubeUri: "totam",
                          },
                        },
                        {
                          link: {
                            displayText: "magni",
                            uri: "nihil",
                          },
                          video: {
                            displayText: "et",
                            youtubeUri: "omnis",
                          },
                        },
                      ],
                      text: "quidem",
                    },
                    pointValue: 6248192047454816017,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "natus",
                            uri: "eos",
                          },
                          video: {
                            displayText: "fugiat",
                            youtubeUri: "numquam",
                          },
                        },
                        {
                          link: {
                            displayText: "aut",
                            uri: "vitae",
                          },
                          video: {
                            displayText: "est",
                            youtubeUri: "exercitationem",
                          },
                        },
                        {
                          link: {
                            displayText: "vel",
                            uri: "facere",
                          },
                          video: {
                            displayText: "quidem",
                            youtubeUri: "quibusdam",
                          },
                        },
                      ],
                      text: "atque",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "blanditiis",
                            uri: "voluptatem",
                          },
                          video: {
                            displayText: "porro",
                            youtubeUri: "facilis",
                          },
                        },
                        {
                          link: {
                            displayText: "sed",
                            uri: "velit",
                          },
                          video: {
                            displayText: "alias",
                            youtubeUri: "aut",
                          },
                        },
                      ],
                      text: "ut",
                    },
                  },
                  questionId: "quos",
                  required: false,
                  rowQuestion: {
                    title: "sint",
                  },
                  scaleQuestion: {
                    high: 801817451213174076,
                    highLabel: "dignissimos",
                    low: 275454291619330931,
                    lowLabel: "veniam",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: true,
                  },
                },
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "inventore",
                        image: {
                          altText: "qui",
                          properties: {
                            alignment: "RIGHT",
                            width: 6107520683097591435,
                          },
                          sourceUri: "deleniti",
                        },
                        isOther: false,
                        value: "enim",
                      },
                      {
                        goToAction: "NEXT_SECTION",
                        goToSectionId: "corporis",
                        image: {
                          altText: "consequuntur",
                          properties: {
                            alignment: "LEFT",
                            width: 8651789405403534555,
                          },
                          sourceUri: "reprehenderit",
                        },
                        isOther: true,
                        value: "recusandae",
                      },
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "excepturi",
                        image: {
                          altText: "dicta",
                          properties: {
                            alignment: "CENTER",
                            width: 8057753338657320320,
                          },
                          sourceUri: "doloremque",
                        },
                        isOther: true,
                        value: "sint",
                      },
                    ],
                    shuffle: false,
                    type: "DROP_DOWN",
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: true,
                  },
                  fileUploadQuestion: {
                    folderId: "iusto",
                    maxFileSize: "ad",
                    maxFiles: 7642023032564939253,
                    types: [
                      "PDF",
                      "PDF",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "corporis",
                        },
                        {
                          value: "sit",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "quod",
                            uri: "in",
                          },
                          video: {
                            displayText: "dolorum",
                            youtubeUri: "maiores",
                          },
                        },
                        {
                          link: {
                            displayText: "enim",
                            uri: "a",
                          },
                          video: {
                            displayText: "laborum",
                            youtubeUri: "rem",
                          },
                        },
                      ],
                      text: "quod",
                    },
                    pointValue: 6042383883184959595,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "aperiam",
                            uri: "quia",
                          },
                          video: {
                            displayText: "inventore",
                            youtubeUri: "et",
                          },
                        },
                        {
                          link: {
                            displayText: "eaque",
                            uri: "ipsam",
                          },
                          video: {
                            displayText: "harum",
                            youtubeUri: "officiis",
                          },
                        },
                      ],
                      text: "nihil",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "voluptas",
                            uri: "quisquam",
                          },
                          video: {
                            displayText: "commodi",
                            youtubeUri: "nemo",
                          },
                        },
                        {
                          link: {
                            displayText: "qui",
                            uri: "fugiat",
                          },
                          video: {
                            displayText: "libero",
                            youtubeUri: "temporibus",
                          },
                        },
                        {
                          link: {
                            displayText: "quia",
                            uri: "quia",
                          },
                          video: {
                            displayText: "atque",
                            youtubeUri: "numquam",
                          },
                        },
                      ],
                      text: "optio",
                    },
                  },
                  questionId: "facilis",
                  required: true,
                  rowQuestion: {
                    title: "praesentium",
                  },
                  scaleQuestion: {
                    high: 6763466000682211643,
                    highLabel: "aut",
                    low: 7272010138611573249,
                    lowLabel: "ex",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: true,
                  },
                },
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "saepe",
                        image: {
                          altText: "quia",
                          properties: {
                            alignment: "RIGHT",
                            width: 4414318418295938773,
                          },
                          sourceUri: "occaecati",
                        },
                        isOther: true,
                        value: "rerum",
                      },
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "sed",
                        image: {
                          altText: "quae",
                          properties: {
                            alignment: "CENTER",
                            width: 758257384443612395,
                          },
                          sourceUri: "qui",
                        },
                        isOther: false,
                        value: "enim",
                      },
                    ],
                    shuffle: true,
                    type: "DROP_DOWN",
                  },
                  dateQuestion: {
                    includeTime: true,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "pariatur",
                    maxFileSize: "est",
                    maxFiles: 9208331929374984741,
                    types: [
                      "DOCUMENT",
                      "DOCUMENT",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "numquam",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "voluptatum",
                            uri: "eius",
                          },
                          video: {
                            displayText: "non",
                            youtubeUri: "eius",
                          },
                        },
                        {
                          link: {
                            displayText: "enim",
                            uri: "vero",
                          },
                          video: {
                            displayText: "tempora",
                            youtubeUri: "ut",
                          },
                        },
                      ],
                      text: "quis",
                    },
                    pointValue: 6062147289734863254,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "porro",
                            uri: "quia",
                          },
                          video: {
                            displayText: "ea",
                            youtubeUri: "quia",
                          },
                        },
                        {
                          link: {
                            displayText: "consectetur",
                            uri: "laborum",
                          },
                          video: {
                            displayText: "eius",
                            youtubeUri: "laborum",
                          },
                        },
                      ],
                      text: "est",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "fuga",
                            uri: "mollitia",
                          },
                          video: {
                            displayText: "dolorem",
                            youtubeUri: "aut",
                          },
                        },
                      ],
                      text: "quis",
                    },
                  },
                  questionId: "consequatur",
                  required: false,
                  rowQuestion: {
                    title: "consequatur",
                  },
                  scaleQuestion: {
                    high: 8210529933496229801,
                    highLabel: "autem",
                    low: 7828292705907165979,
                    lowLabel: "quae",
                  },
                  textQuestion: {
                    paragraph: true,
                  },
                  timeQuestion: {
                    duration: true,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "dolore",
                properties: {
                  alignment: "RIGHT",
                  width: 850750828655117372,
                },
                sourceUri: "voluptatem",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: "RESTART_FORM",
                      goToSectionId: "rerum",
                      image: {
                        altText: "cupiditate",
                        properties: {
                          alignment: "LEFT",
                          width: 5756585499102476017,
                        },
                        sourceUri: "nesciunt",
                      },
                      isOther: true,
                      value: "enim",
                    },
                    {
                      goToAction: "NEXT_SECTION",
                      goToSectionId: "illum",
                      image: {
                        altText: "dolores",
                        properties: {
                          alignment: "CENTER",
                          width: 2379224937811426956,
                        },
                        sourceUri: "voluptas",
                      },
                      isOther: true,
                      value: "nobis",
                    },
                  ],
                  shuffle: false,
                  type: "DROP_DOWN",
                },
                dateQuestion: {
                  includeTime: true,
                  includeYear: true,
                },
                fileUploadQuestion: {
                  folderId: "reiciendis",
                  maxFileSize: "et",
                  maxFiles: 5845488839485666092,
                  types: [
                    "DOCUMENT",
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "unde",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "commodi",
                          uri: "nihil",
                        },
                        video: {
                          displayText: "sapiente",
                          youtubeUri: "aut",
                        },
                      },
                    ],
                    text: "ut",
                  },
                  pointValue: 651842762692709901,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "facilis",
                          uri: "vel",
                        },
                        video: {
                          displayText: "qui",
                          youtubeUri: "aliquid",
                        },
                      },
                      {
                        link: {
                          displayText: "rem",
                          uri: "totam",
                        },
                        video: {
                          displayText: "nisi",
                          youtubeUri: "voluptatem",
                        },
                      },
                      {
                        link: {
                          displayText: "rerum",
                          uri: "praesentium",
                        },
                        video: {
                          displayText: "id",
                          youtubeUri: "unde",
                        },
                      },
                    ],
                    text: "nihil",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "alias",
                          uri: "vel",
                        },
                        video: {
                          displayText: "repellendus",
                          youtubeUri: "accusamus",
                        },
                      },
                      {
                        link: {
                          displayText: "recusandae",
                          uri: "laborum",
                        },
                        video: {
                          displayText: "error",
                          youtubeUri: "est",
                        },
                      },
                      {
                        link: {
                          displayText: "voluptatem",
                          uri: "quos",
                        },
                        video: {
                          displayText: "ad",
                          youtubeUri: "nesciunt",
                        },
                      },
                    ],
                    text: "rerum",
                  },
                },
                questionId: "ex",
                required: false,
                rowQuestion: {
                  title: "repellat",
                },
                scaleQuestion: {
                  high: 4438357356669671294,
                  highLabel: "dolores",
                  low: 2534242627986890109,
                  lowLabel: "pariatur",
                },
                textQuestion: {
                  paragraph: false,
                },
                timeQuestion: {
                  duration: false,
                },
              },
            },
            textItem: {
              "odit": "in",
              "distinctio": "dicta",
              "quibusdam": "soluta",
            },
            title: "nobis",
            videoItem: {
              caption: "aut",
              video: {
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 8665362823887570236,
                },
                youtubeUri: "dignissimos",
              },
            },
          },
          location: {
            index: 2036648715124287558,
          },
          updateMask: "nihil",
        },
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: false,
            },
          },
          updateMask: "omnis",
        },
      },
      {
        createItem: {
          item: {
            description: "quam",
            imageItem: {
              image: {
                altText: "neque",
                properties: {
                  alignment: "CENTER",
                  width: 1399167766426409286,
                },
                sourceUri: "occaecati",
              },
            },
            itemId: "dolorum",
            pageBreakItem: {
              "ut": "provident",
              "ut": "ab",
              "dolores": "qui",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: "NEXT_SECTION",
                      goToSectionId: "et",
                      image: {
                        altText: "autem",
                        properties: {
                          alignment: "RIGHT",
                          width: 268300614933297997,
                        },
                        sourceUri: "quia",
                      },
                      isOther: false,
                      value: "quaerat",
                    },
                    {
                      goToAction: "SUBMIT_FORM",
                      goToSectionId: "nihil",
                      image: {
                        altText: "nesciunt",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 3835150745734257540,
                        },
                        sourceUri: "voluptas",
                      },
                      isOther: true,
                      value: "aliquid",
                    },
                  ],
                  shuffle: false,
                  type: "RADIO",
                },
                shuffleQuestions: false,
              },
              image: {
                altText: "sunt",
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 2254311656624673200,
                },
                sourceUri: "dolores",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "officiis",
                        image: {
                          altText: "ut",
                          properties: {
                            alignment: "LEFT",
                            width: 439427798654126173,
                          },
                          sourceUri: "et",
                        },
                        isOther: true,
                        value: "possimus",
                      },
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "omnis",
                        image: {
                          altText: "ipsum",
                          properties: {
                            alignment: "LEFT",
                            width: 516302766014943732,
                          },
                          sourceUri: "quia",
                        },
                        isOther: false,
                        value: "hic",
                      },
                      {
                        goToAction: "GO_TO_ACTION_UNSPECIFIED",
                        goToSectionId: "quis",
                        image: {
                          altText: "commodi",
                          properties: {
                            alignment: "RIGHT",
                            width: 5509880878158274266,
                          },
                          sourceUri: "qui",
                        },
                        isOther: true,
                        value: "labore",
                      },
                    ],
                    shuffle: false,
                    type: "RADIO",
                  },
                  dateQuestion: {
                    includeTime: false,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "quae",
                    maxFileSize: "quisquam",
                    maxFiles: 8456188321711004307,
                    types: [
                      "AUDIO",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "qui",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "nisi",
                            uri: "nesciunt",
                          },
                          video: {
                            displayText: "hic",
                            youtubeUri: "molestiae",
                          },
                        },
                        {
                          link: {
                            displayText: "qui",
                            uri: "qui",
                          },
                          video: {
                            displayText: "voluptatum",
                            youtubeUri: "et",
                          },
                        },
                        {
                          link: {
                            displayText: "quia",
                            uri: "numquam",
                          },
                          video: {
                            displayText: "est",
                            youtubeUri: "itaque",
                          },
                        },
                      ],
                      text: "corrupti",
                    },
                    pointValue: 3000746524723787116,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "qui",
                            uri: "consequuntur",
                          },
                          video: {
                            displayText: "non",
                            youtubeUri: "ipsum",
                          },
                        },
                        {
                          link: {
                            displayText: "illo",
                            uri: "eius",
                          },
                          video: {
                            displayText: "voluptates",
                            youtubeUri: "ipsa",
                          },
                        },
                        {
                          link: {
                            displayText: "maxime",
                            uri: "dolor",
                          },
                          video: {
                            displayText: "ut",
                            youtubeUri: "corporis",
                          },
                        },
                      ],
                      text: "adipisci",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "et",
                            uri: "laboriosam",
                          },
                          video: {
                            displayText: "sed",
                            youtubeUri: "esse",
                          },
                        },
                      ],
                      text: "est",
                    },
                  },
                  questionId: "in",
                  required: true,
                  rowQuestion: {
                    title: "itaque",
                  },
                  scaleQuestion: {
                    high: 3952804402930949344,
                    highLabel: "iste",
                    low: 537559002373622411,
                    lowLabel: "aspernatur",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: false,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "voluptas",
                properties: {
                  alignment: "LEFT",
                  width: 5500847719944379584,
                },
                sourceUri: "enim",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: "RESTART_FORM",
                      goToSectionId: "velit",
                      image: {
                        altText: "eveniet",
                        properties: {
                          alignment: "LEFT",
                          width: 4868780682979768935,
                        },
                        sourceUri: "et",
                      },
                      isOther: false,
                      value: "laudantium",
                    },
                    {
                      goToAction: "GO_TO_ACTION_UNSPECIFIED",
                      goToSectionId: "facere",
                      image: {
                        altText: "quis",
                        properties: {
                          alignment: "LEFT",
                          width: 3267167517764434498,
                        },
                        sourceUri: "perferendis",
                      },
                      isOther: true,
                      value: "perferendis",
                    },
                  ],
                  shuffle: false,
                  type: "CHECKBOX",
                },
                dateQuestion: {
                  includeTime: true,
                  includeYear: false,
                },
                fileUploadQuestion: {
                  folderId: "consequatur",
                  maxFileSize: "quia",
                  maxFiles: 5367116013832584196,
                  types: [
                    "SPREADSHEET",
                    "IMAGE",
                    "PDF",
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "enim",
                      },
                      {
                        value: "aspernatur",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "et",
                          uri: "aliquid",
                        },
                        video: {
                          displayText: "totam",
                          youtubeUri: "alias",
                        },
                      },
                      {
                        link: {
                          displayText: "omnis",
                          uri: "veritatis",
                        },
                        video: {
                          displayText: "qui",
                          youtubeUri: "explicabo",
                        },
                      },
                    ],
                    text: "nemo",
                  },
                  pointValue: 2779401446688930153,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "qui",
                          uri: "incidunt",
                        },
                        video: {
                          displayText: "qui",
                          youtubeUri: "hic",
                        },
                      },
                      {
                        link: {
                          displayText: "dolore",
                          uri: "impedit",
                        },
                        video: {
                          displayText: "pariatur",
                          youtubeUri: "sapiente",
                        },
                      },
                      {
                        link: {
                          displayText: "aperiam",
                          uri: "maiores",
                        },
                        video: {
                          displayText: "libero",
                          youtubeUri: "dolores",
                        },
                      },
                    ],
                    text: "et",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "ut",
                          uri: "quo",
                        },
                        video: {
                          displayText: "voluptatem",
                          youtubeUri: "saepe",
                        },
                      },
                    ],
                    text: "et",
                  },
                },
                questionId: "doloribus",
                required: false,
                rowQuestion: {
                  title: "nisi",
                },
                scaleQuestion: {
                  high: 6735860509974746170,
                  highLabel: "molestiae",
                  low: 8966535707411915449,
                  lowLabel: "nostrum",
                },
                textQuestion: {
                  paragraph: true,
                },
                timeQuestion: {
                  duration: true,
                },
              },
            },
            textItem: {
              "consectetur": "temporibus",
            },
            title: "doloribus",
            videoItem: {
              caption: "id",
              video: {
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 4574488806323159478,
                },
                youtubeUri: "quam",
              },
            },
          },
          location: {
            index: 968779009543895434,
          },
        },
        deleteItem: {
          location: {
            index: 4344127675164179706,
          },
        },
        moveItem: {
          newLocation: {
            index: 1360592974098936303,
          },
          originalLocation: {
            index: 2049647356036480613,
          },
        },
        updateFormInfo: {
          info: {
            description: "omnis",
            title: "et",
          },
          updateMask: "a",
        },
        updateItem: {
          item: {
            description: "voluptatem",
            imageItem: {
              image: {
                altText: "voluptas",
                properties: {
                  alignment: "CENTER",
                  width: 6033405793850872069,
                },
                sourceUri: "dolorum",
              },
            },
            itemId: "qui",
            pageBreakItem: {
              "sunt": "natus",
            },
            questionGroupItem: {
              grid: {
                columns: {
                  options: [
                    {
                      goToAction: "RESTART_FORM",
                      goToSectionId: "reiciendis",
                      image: {
                        altText: "temporibus",
                        properties: {
                          alignment: "RIGHT",
                          width: 4343310699711623317,
                        },
                        sourceUri: "voluptatum",
                      },
                      isOther: true,
                      value: "et",
                    },
                  ],
                  shuffle: true,
                  type: "RADIO",
                },
                shuffleQuestions: true,
              },
              image: {
                altText: "labore",
                properties: {
                  alignment: "CENTER",
                  width: 7314412807888287943,
                },
                sourceUri: "deserunt",
              },
              questions: [
                {
                  choiceQuestion: {
                    options: [
                      {
                        goToAction: "SUBMIT_FORM",
                        goToSectionId: "omnis",
                        image: {
                          altText: "explicabo",
                          properties: {
                            alignment: "CENTER",
                            width: 3902172864118496445,
                          },
                          sourceUri: "qui",
                        },
                        isOther: false,
                        value: "ut",
                      },
                      {
                        goToAction: "NEXT_SECTION",
                        goToSectionId: "quis",
                        image: {
                          altText: "adipisci",
                          properties: {
                            alignment: "CENTER",
                            width: 5725741911587581094,
                          },
                          sourceUri: "facere",
                        },
                        isOther: false,
                        value: "et",
                      },
                      {
                        goToAction: "RESTART_FORM",
                        goToSectionId: "temporibus",
                        image: {
                          altText: "cum",
                          properties: {
                            alignment: "ALIGNMENT_UNSPECIFIED",
                            width: 7429771695958355309,
                          },
                          sourceUri: "non",
                        },
                        isOther: true,
                        value: "adipisci",
                      },
                    ],
                    shuffle: false,
                    type: "RADIO",
                  },
                  dateQuestion: {
                    includeTime: true,
                    includeYear: false,
                  },
                  fileUploadQuestion: {
                    folderId: "error",
                    maxFileSize: "eum",
                    maxFiles: 1721042829193643249,
                    types: [
                      "PDF",
                    ],
                  },
                  grading: {
                    correctAnswers: {
                      answers: [
                        {
                          value: "esse",
                        },
                        {
                          value: "sint",
                        },
                      ],
                    },
                    generalFeedback: {
                      material: [
                        {
                          link: {
                            displayText: "libero",
                            uri: "nostrum",
                          },
                          video: {
                            displayText: "sit",
                            youtubeUri: "autem",
                          },
                        },
                        {
                          link: {
                            displayText: "totam",
                            uri: "cumque",
                          },
                          video: {
                            displayText: "error",
                            youtubeUri: "enim",
                          },
                        },
                      ],
                      text: "recusandae",
                    },
                    pointValue: 6516567359299810617,
                    whenRight: {
                      material: [
                        {
                          link: {
                            displayText: "ab",
                            uri: "fugiat",
                          },
                          video: {
                            displayText: "cumque",
                            youtubeUri: "nesciunt",
                          },
                        },
                        {
                          link: {
                            displayText: "voluptatem",
                            uri: "consequatur",
                          },
                          video: {
                            displayText: "nemo",
                            youtubeUri: "dolor",
                          },
                        },
                      ],
                      text: "reprehenderit",
                    },
                    whenWrong: {
                      material: [
                        {
                          link: {
                            displayText: "velit",
                            uri: "libero",
                          },
                          video: {
                            displayText: "omnis",
                            youtubeUri: "sint",
                          },
                        },
                      ],
                      text: "enim",
                    },
                  },
                  questionId: "magnam",
                  required: true,
                  rowQuestion: {
                    title: "quibusdam",
                  },
                  scaleQuestion: {
                    high: 3728600122260743258,
                    highLabel: "rerum",
                    low: 462211148961836771,
                    lowLabel: "atque",
                  },
                  textQuestion: {
                    paragraph: false,
                  },
                  timeQuestion: {
                    duration: true,
                  },
                },
              ],
            },
            questionItem: {
              image: {
                altText: "officiis",
                properties: {
                  alignment: "ALIGNMENT_UNSPECIFIED",
                  width: 3290097293778856843,
                },
                sourceUri: "animi",
              },
              question: {
                choiceQuestion: {
                  options: [
                    {
                      goToAction: "SUBMIT_FORM",
                      goToSectionId: "similique",
                      image: {
                        altText: "est",
                        properties: {
                          alignment: "CENTER",
                          width: 5642624655095294941,
                        },
                        sourceUri: "repudiandae",
                      },
                      isOther: true,
                      value: "occaecati",
                    },
                    {
                      goToAction: "SUBMIT_FORM",
                      goToSectionId: "magni",
                      image: {
                        altText: "quia",
                        properties: {
                          alignment: "ALIGNMENT_UNSPECIFIED",
                          width: 5480166450521866676,
                        },
                        sourceUri: "ea",
                      },
                      isOther: true,
                      value: "ab",
                    },
                  ],
                  shuffle: true,
                  type: "CHOICE_TYPE_UNSPECIFIED",
                },
                dateQuestion: {
                  includeTime: false,
                  includeYear: true,
                },
                fileUploadQuestion: {
                  folderId: "laudantium",
                  maxFileSize: "repellat",
                  maxFiles: 1606274492688274719,
                  types: [
                    "SPREADSHEET",
                  ],
                },
                grading: {
                  correctAnswers: {
                    answers: [
                      {
                        value: "necessitatibus",
                      },
                      {
                        value: "repellat",
                      },
                      {
                        value: "sint",
                      },
                    ],
                  },
                  generalFeedback: {
                    material: [
                      {
                        link: {
                          displayText: "sit",
                          uri: "deleniti",
                        },
                        video: {
                          displayText: "quidem",
                          youtubeUri: "porro",
                        },
                      },
                      {
                        link: {
                          displayText: "rerum",
                          uri: "aut",
                        },
                        video: {
                          displayText: "quibusdam",
                          youtubeUri: "adipisci",
                        },
                      },
                    ],
                    text: "aut",
                  },
                  pointValue: 4922008057303996057,
                  whenRight: {
                    material: [
                      {
                        link: {
                          displayText: "error",
                          uri: "debitis",
                        },
                        video: {
                          displayText: "alias",
                          youtubeUri: "totam",
                        },
                      },
                    ],
                    text: "fugit",
                  },
                  whenWrong: {
                    material: [
                      {
                        link: {
                          displayText: "fugiat",
                          uri: "necessitatibus",
                        },
                        video: {
                          displayText: "provident",
                          youtubeUri: "voluptatem",
                        },
                      },
                    ],
                    text: "voluptas",
                  },
                },
                questionId: "pariatur",
                required: false,
                rowQuestion: {
                  title: "et",
                },
                scaleQuestion: {
                  high: 8817418480462070721,
                  highLabel: "quasi",
                  low: 7515202337069457673,
                  lowLabel: "reiciendis",
                },
                textQuestion: {
                  paragraph: false,
                },
                timeQuestion: {
                  duration: true,
                },
              },
            },
            textItem: {
              "nobis": "ad",
              "ducimus": "deleniti",
              "nisi": "ut",
            },
            title: "aut",
            videoItem: {
              caption: "porro",
              video: {
                properties: {
                  alignment: "RIGHT",
                  width: 7655475005574756872,
                },
                youtubeUri: "aut",
              },
            },
          },
          location: {
            index: 8723596352842335158,
          },
          updateMask: "laudantium",
        },
        updateSettings: {
          settings: {
            quizSettings: {
              isQuiz: false,
            },
          },
          updateMask: "et",
        },
      },
    ],
    writeControl: {
      requiredRevisionId: "eius",
      targetRevisionId: "qui",
    },
  },
};

sdk.forms.formsFormsBatchUpdate(req).then((res: FormsFormsBatchUpdateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### forms

* `formsFormsBatchUpdate` - Change the form with a batch of updates.
* `formsFormsCreate` - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* `formsFormsGet` - Get a form.
* `formsFormsResponsesGet` - Get one response from the form.
* `formsFormsResponsesList` - List a form's responses.
* `formsFormsWatchesCreate` - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* `formsFormsWatchesDelete` - Delete a watch.
* `formsFormsWatchesList` - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* `formsFormsWatchesRenew` - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
