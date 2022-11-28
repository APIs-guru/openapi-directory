# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.FormsFormsBatchUpdateRequest{
        Security: operations.FormsFormsBatchUpdateSecurity{
            Option1: &operations.FormsFormsBatchUpdateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.FormsFormsBatchUpdatePathParams{
            FormID: "blanditiis",
        },
        QueryParams: operations.FormsFormsBatchUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "doloremque",
            Alt: "proto",
            Callback: "nulla",
            Fields: "est",
            Key: "fuga",
            OauthToken: "inventore",
            PrettyPrint: false,
            QuotaUser: "dolorem",
            UploadType: "quos",
            UploadProtocol: "similique",
        },
        Request: &shared.BatchUpdateFormRequestInput{
            IncludeFormInResponse: true,
            Requests: []shared.RequestInput{
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "accusantium",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "blanditiis",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 6367668452330419632,
                                    },
                                    SourceURI: "harum",
                                },
                            },
                            ItemID: "id",
                            PageBreakItem: map[string]interface{}{
                                "commodi": "voluptas",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "doloribus",
                                                Image: &shared.ImageInput{
                                                    AltText: "nulla",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 3887418951089824439,
                                                    },
                                                    SourceURI: "alias",
                                                },
                                                IsOther: true,
                                                Value: "voluptatem",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "dolores",
                                                Image: &shared.ImageInput{
                                                    AltText: "dicta",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 2571576639404732481,
                                                    },
                                                    SourceURI: "ut",
                                                },
                                                IsOther: false,
                                                Value: "vel",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "ut",
                                                Image: &shared.ImageInput{
                                                    AltText: "provident",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 3210642949273039304,
                                                    },
                                                    SourceURI: "sit",
                                                },
                                                IsOther: false,
                                                Value: "delectus",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "quo",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 1612920053756266126,
                                    },
                                    SourceURI: "vitae",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "reiciendis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "velit",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 2152318449603758279,
                                                        },
                                                        SourceURI: "enim",
                                                    },
                                                    IsOther: false,
                                                    Value: "et",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "vitae",
                                                    Image: &shared.ImageInput{
                                                        AltText: "asperiores",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 2887366195971768826,
                                                        },
                                                        SourceURI: "quibusdam",
                                                    },
                                                    IsOther: true,
                                                    Value: "totam",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHECKBOX",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "unde",
                                            MaxFileSize: "facilis",
                                            MaxFiles: 5917731321530822737,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "VIDEO",
                                                "SPREADSHEET",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "qui",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "voluptas",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "quo",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sit",
                                                            URI: "doloribus",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "eveniet",
                                                        },
                                                    },
                                                },
                                                Text: "assumenda",
                                            },
                                            PointValue: 5793950756465005265,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "illum",
                                                            URI: "rem",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatem",
                                                            YoutubeURI: "est",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sunt",
                                                            URI: "quo",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatum",
                                                            YoutubeURI: "doloremque",
                                                        },
                                                    },
                                                },
                                                Text: "ut",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "reiciendis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eveniet",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                },
                                                Text: "quia",
                                            },
                                        },
                                        QuestionID: "dicta",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "voluptas",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8588093541192860205,
                                            HighLabel: "accusantium",
                                            Low: 2750849625064778423,
                                            LowLabel: "sapiente",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "autem",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ad",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 1530206793438036833,
                                                        },
                                                        SourceURI: "esse",
                                                    },
                                                    IsOther: true,
                                                    Value: "quia",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "cupiditate",
                                                    Image: &shared.ImageInput{
                                                        AltText: "qui",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 4166502192664085675,
                                                        },
                                                        SourceURI: "dolorum",
                                                    },
                                                    IsOther: true,
                                                    Value: "doloribus",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "eum",
                                                    Image: &shared.ImageInput{
                                                        AltText: "fuga",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 3699705278671025332,
                                                        },
                                                        SourceURI: "assumenda",
                                                    },
                                                    IsOther: true,
                                                    Value: "magni",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHOICE_TYPE_UNSPECIFIED",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "voluptas",
                                            MaxFileSize: "et",
                                            MaxFiles: 5065495399618875749,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "IMAGE",
                                                "FILE_TYPE_UNSPECIFIED",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "ullam",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "rerum",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "animi",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ea",
                                                            URI: "nihil",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "suscipit",
                                                            YoutubeURI: "vel",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "commodi",
                                                            URI: "sint",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nobis",
                                                            YoutubeURI: "voluptatem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eligendi",
                                                            URI: "ratione",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "exercitationem",
                                                            YoutubeURI: "rerum",
                                                        },
                                                    },
                                                },
                                                Text: "voluptatem",
                                            },
                                            PointValue: 6630029552617051383,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sunt",
                                                            URI: "ullam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "similique",
                                                            YoutubeURI: "nam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "est",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptas",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                },
                                                Text: "et",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "dolorem",
                                                            URI: "sit",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "id",
                                                            YoutubeURI: "a",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nulla",
                                                            URI: "blanditiis",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "perspiciatis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "corporis",
                                                            URI: "recusandae",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "delectus",
                                                            YoutubeURI: "eos",
                                                        },
                                                    },
                                                },
                                                Text: "iure",
                                            },
                                        },
                                        QuestionID: "culpa",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "aut",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8883499301485783187,
                                            HighLabel: "nesciunt",
                                            Low: 8592792957227080212,
                                            LowLabel: "ut",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "iste",
                                                    Image: &shared.ImageInput{
                                                        AltText: "et",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 3385703925298031216,
                                                        },
                                                        SourceURI: "quam",
                                                    },
                                                    IsOther: true,
                                                    Value: "eos",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "incidunt",
                                                    Image: &shared.ImageInput{
                                                        AltText: "odio",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 4538443254300990071,
                                                        },
                                                        SourceURI: "error",
                                                    },
                                                    IsOther: false,
                                                    Value: "beatae",
                                                },
                                            },
                                            Shuffle: true,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "quia",
                                            MaxFileSize: "facilis",
                                            MaxFiles: 7651563257997919332,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DRAWING",
                                                "PRESENTATION",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "autem",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "at",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "sed",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "reprehenderit",
                                                            URI: "ea",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                },
                                                Text: "nisi",
                                            },
                                            PointValue: 1293501408407461825,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "repudiandae",
                                                            URI: "non",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "aut",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                },
                                                Text: "ea",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "necessitatibus",
                                                            URI: "est",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "voluptas",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "et",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "consequatur",
                                                            YoutubeURI: "odit",
                                                        },
                                                    },
                                                },
                                                Text: "unde",
                                            },
                                        },
                                        QuestionID: "omnis",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "iusto",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 178528086225314371,
                                            HighLabel: "autem",
                                            Low: 5523822080997069527,
                                            LowLabel: "similique",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "libero",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 4671827097790621909,
                                    },
                                    SourceURI: "voluptatum",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "officia",
                                                Image: &shared.ImageInput{
                                                    AltText: "architecto",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 2100143270353897595,
                                                    },
                                                    SourceURI: "in",
                                                },
                                                IsOther: false,
                                                Value: "beatae",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "beatae",
                                                Image: &shared.ImageInput{
                                                    AltText: "voluptate",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 6160806195183941617,
                                                    },
                                                    SourceURI: "sequi",
                                                },
                                                IsOther: true,
                                                Value: "ipsam",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "DROP_DOWN",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: true,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "dolores",
                                        MaxFileSize: "voluptas",
                                        MaxFiles: 3821450622976919731,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "ANY",
                                            "DRAWING",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "eum",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "suscipit",
                                                        URI: "excepturi",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "laborum",
                                                        YoutubeURI: "iure",
                                                    },
                                                },
                                            },
                                            Text: "reprehenderit",
                                        },
                                        PointValue: 4401454000593110478,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "et",
                                                        URI: "quo",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "reprehenderit",
                                                        YoutubeURI: "repellendus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "vero",
                                                        URI: "eveniet",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "omnis",
                                                        YoutubeURI: "delectus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "quasi",
                                                        URI: "voluptates",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "eligendi",
                                                        YoutubeURI: "sint",
                                                    },
                                                },
                                            },
                                            Text: "deserunt",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ut",
                                                        URI: "omnis",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "assumenda",
                                                        YoutubeURI: "earum",
                                                    },
                                                },
                                            },
                                            Text: "eum",
                                        },
                                    },
                                    QuestionID: "ut",
                                    Required: true,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "sit",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 3773208962586552143,
                                        HighLabel: "architecto",
                                        Low: 5512792728107327134,
                                        LowLabel: "et",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: true,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "et": "consequatur",
                                "molestiae": "corrupti",
                                "veniam": "dolorem",
                            },
                            Title: "magnam",
                            VideoItem: &shared.VideoItem{
                                Caption: "est",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 6220347428525113494,
                                    },
                                    YoutubeURI: "sunt",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 6539930946701384664,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 1979148960994744380,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 5006807331309778843,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 7842360832936955031,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "quam",
                            Title: "quas",
                        },
                        UpdateMask: "id",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "consectetur",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "in",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 1189604837382641522,
                                    },
                                    SourceURI: "sed",
                                },
                            },
                            ItemID: "velit",
                            PageBreakItem: map[string]interface{}{
                                "recusandae": "commodi",
                                "eius": "dolore",
                                "a": "et",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "excepturi",
                                                Image: &shared.ImageInput{
                                                    AltText: "est",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 6462757265347799921,
                                                    },
                                                    SourceURI: "nam",
                                                },
                                                IsOther: true,
                                                Value: "aut",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    ShuffleQuestions: true,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "sed",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 6847449149842679249,
                                    },
                                    SourceURI: "ut",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "animi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "nam",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 1656220335320334169,
                                                        },
                                                        SourceURI: "ipsa",
                                                    },
                                                    IsOther: false,
                                                    Value: "consequatur",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "hic",
                                                    Image: &shared.ImageInput{
                                                        AltText: "veritatis",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 4692652398842461517,
                                                        },
                                                        SourceURI: "vel",
                                                    },
                                                    IsOther: false,
                                                    Value: "odit",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "CHECKBOX",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "nisi",
                                            MaxFileSize: "nulla",
                                            MaxFiles: 5203196856441168768,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DRAWING",
                                                "ANY",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "et",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "dignissimos",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "deleniti",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "id",
                                                            URI: "sunt",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cum",
                                                            YoutubeURI: "totam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "magni",
                                                            URI: "nihil",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "et",
                                                            YoutubeURI: "omnis",
                                                        },
                                                    },
                                                },
                                                Text: "quidem",
                                            },
                                            PointValue: 6248192047454816017,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "natus",
                                                            URI: "eos",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "fugiat",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aut",
                                                            URI: "vitae",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "est",
                                                            YoutubeURI: "exercitationem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "vel",
                                                            URI: "facere",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "quidem",
                                                            YoutubeURI: "quibusdam",
                                                        },
                                                    },
                                                },
                                                Text: "atque",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "blanditiis",
                                                            URI: "voluptatem",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "porro",
                                                            YoutubeURI: "facilis",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "sed",
                                                            URI: "velit",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "alias",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "ut",
                                            },
                                        },
                                        QuestionID: "quos",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "sint",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 801817451213174076,
                                            HighLabel: "dignissimos",
                                            Low: 275454291619330931,
                                            LowLabel: "veniam",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "inventore",
                                                    Image: &shared.ImageInput{
                                                        AltText: "qui",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 6107520683097591435,
                                                        },
                                                        SourceURI: "deleniti",
                                                    },
                                                    IsOther: false,
                                                    Value: "enim",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "corporis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "consequuntur",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 8651789405403534555,
                                                        },
                                                        SourceURI: "reprehenderit",
                                                    },
                                                    IsOther: true,
                                                    Value: "recusandae",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "excepturi",
                                                    Image: &shared.ImageInput{
                                                        AltText: "dicta",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 8057753338657320320,
                                                        },
                                                        SourceURI: "doloremque",
                                                    },
                                                    IsOther: true,
                                                    Value: "sint",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: true,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "iusto",
                                            MaxFileSize: "ad",
                                            MaxFiles: 7642023032564939253,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PDF",
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "corporis",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "sit",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quod",
                                                            URI: "in",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorum",
                                                            YoutubeURI: "maiores",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "a",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "laborum",
                                                            YoutubeURI: "rem",
                                                        },
                                                    },
                                                },
                                                Text: "quod",
                                            },
                                            PointValue: 6042383883184959595,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "aperiam",
                                                            URI: "quia",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "inventore",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "eaque",
                                                            URI: "ipsam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "harum",
                                                            YoutubeURI: "officiis",
                                                        },
                                                    },
                                                },
                                                Text: "nihil",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptas",
                                                            URI: "quisquam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "commodi",
                                                            YoutubeURI: "nemo",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "fugiat",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "libero",
                                                            YoutubeURI: "temporibus",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "quia",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "atque",
                                                            YoutubeURI: "numquam",
                                                        },
                                                    },
                                                },
                                                Text: "optio",
                                            },
                                        },
                                        QuestionID: "facilis",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "praesentium",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 6763466000682211643,
                                            HighLabel: "aut",
                                            Low: 7272010138611573249,
                                            LowLabel: "ex",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "saepe",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quia",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 4414318418295938773,
                                                        },
                                                        SourceURI: "occaecati",
                                                    },
                                                    IsOther: true,
                                                    Value: "rerum",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "sed",
                                                    Image: &shared.ImageInput{
                                                        AltText: "quae",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 758257384443612395,
                                                        },
                                                        SourceURI: "qui",
                                                    },
                                                    IsOther: false,
                                                    Value: "enim",
                                                },
                                            },
                                            Shuffle: true,
                                            Type: "DROP_DOWN",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "pariatur",
                                            MaxFileSize: "est",
                                            MaxFiles: 9208331929374984741,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "DOCUMENT",
                                                "DOCUMENT",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "numquam",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatum",
                                                            URI: "eius",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "eius",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "enim",
                                                            URI: "vero",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "tempora",
                                                            YoutubeURI: "ut",
                                                        },
                                                    },
                                                },
                                                Text: "quis",
                                            },
                                            PointValue: 6062147289734863254,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "porro",
                                                            URI: "quia",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ea",
                                                            YoutubeURI: "quia",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "consectetur",
                                                            URI: "laborum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "eius",
                                                            YoutubeURI: "laborum",
                                                        },
                                                    },
                                                },
                                                Text: "est",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "fuga",
                                                            URI: "mollitia",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "dolorem",
                                                            YoutubeURI: "aut",
                                                        },
                                                    },
                                                },
                                                Text: "quis",
                                            },
                                        },
                                        QuestionID: "consequatur",
                                        Required: false,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "consequatur",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 8210529933496229801,
                                            HighLabel: "autem",
                                            Low: 7828292705907165979,
                                            LowLabel: "quae",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: true,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "dolore",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 850750828655117372,
                                    },
                                    SourceURI: "voluptatem",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "rerum",
                                                Image: &shared.ImageInput{
                                                    AltText: "cupiditate",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 5756585499102476017,
                                                    },
                                                    SourceURI: "nesciunt",
                                                },
                                                IsOther: true,
                                                Value: "enim",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "illum",
                                                Image: &shared.ImageInput{
                                                    AltText: "dolores",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 2379224937811426956,
                                                    },
                                                    SourceURI: "voluptas",
                                                },
                                                IsOther: true,
                                                Value: "nobis",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "DROP_DOWN",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: true,
                                        IncludeYear: true,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "reiciendis",
                                        MaxFileSize: "et",
                                        MaxFiles: 5845488839485666092,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "DOCUMENT",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "unde",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "commodi",
                                                        URI: "nihil",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "sapiente",
                                                        YoutubeURI: "aut",
                                                    },
                                                },
                                            },
                                            Text: "ut",
                                        },
                                        PointValue: 651842762692709901,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "facilis",
                                                        URI: "vel",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "qui",
                                                        YoutubeURI: "aliquid",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rem",
                                                        URI: "totam",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "nisi",
                                                        YoutubeURI: "voluptatem",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rerum",
                                                        URI: "praesentium",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "id",
                                                        YoutubeURI: "unde",
                                                    },
                                                },
                                            },
                                            Text: "nihil",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "alias",
                                                        URI: "vel",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "repellendus",
                                                        YoutubeURI: "accusamus",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "recusandae",
                                                        URI: "laborum",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "error",
                                                        YoutubeURI: "est",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "voluptatem",
                                                        URI: "quos",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "ad",
                                                        YoutubeURI: "nesciunt",
                                                    },
                                                },
                                            },
                                            Text: "rerum",
                                        },
                                    },
                                    QuestionID: "ex",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "repellat",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 4438357356669671294,
                                        HighLabel: "dolores",
                                        Low: 2534242627986890109,
                                        LowLabel: "pariatur",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: false,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "odit": "in",
                                "distinctio": "dicta",
                                "quibusdam": "soluta",
                            },
                            Title: "nobis",
                            VideoItem: &shared.VideoItem{
                                Caption: "aut",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 8665362823887570236,
                                    },
                                    YoutubeURI: "dignissimos",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 2036648715124287558,
                        },
                        UpdateMask: "nihil",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "omnis",
                    },
                },
                shared.RequestInput{
                    CreateItem: &shared.CreateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "quam",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "neque",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 1399167766426409286,
                                    },
                                    SourceURI: "occaecati",
                                },
                            },
                            ItemID: "dolorum",
                            PageBreakItem: map[string]interface{}{
                                "ut": "provident",
                                "ut": "ab",
                                "dolores": "qui",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "NEXT_SECTION",
                                                GoToSectionID: "et",
                                                Image: &shared.ImageInput{
                                                    AltText: "autem",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 268300614933297997,
                                                    },
                                                    SourceURI: "quia",
                                                },
                                                IsOther: false,
                                                Value: "quaerat",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "nihil",
                                                Image: &shared.ImageInput{
                                                    AltText: "nesciunt",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 3835150745734257540,
                                                    },
                                                    SourceURI: "voluptas",
                                                },
                                                IsOther: true,
                                                Value: "aliquid",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "RADIO",
                                    },
                                    ShuffleQuestions: false,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "sunt",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 2254311656624673200,
                                    },
                                    SourceURI: "dolores",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "officiis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ut",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 439427798654126173,
                                                        },
                                                        SourceURI: "et",
                                                    },
                                                    IsOther: true,
                                                    Value: "possimus",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "omnis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "ipsum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "LEFT",
                                                            Width: 516302766014943732,
                                                        },
                                                        SourceURI: "quia",
                                                    },
                                                    IsOther: false,
                                                    Value: "hic",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                    GoToSectionID: "quis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "commodi",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "RIGHT",
                                                            Width: 5509880878158274266,
                                                        },
                                                        SourceURI: "qui",
                                                    },
                                                    IsOther: true,
                                                    Value: "labore",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: false,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "quae",
                                            MaxFileSize: "quisquam",
                                            MaxFiles: 8456188321711004307,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "AUDIO",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "qui",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "nisi",
                                                            URI: "nesciunt",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "hic",
                                                            YoutubeURI: "molestiae",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "qui",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptatum",
                                                            YoutubeURI: "et",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "quia",
                                                            URI: "numquam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "est",
                                                            YoutubeURI: "itaque",
                                                        },
                                                    },
                                                },
                                                Text: "corrupti",
                                            },
                                            PointValue: 3000746524723787116,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "qui",
                                                            URI: "consequuntur",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "non",
                                                            YoutubeURI: "ipsum",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "illo",
                                                            URI: "eius",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "voluptates",
                                                            YoutubeURI: "ipsa",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "maxime",
                                                            URI: "dolor",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "ut",
                                                            YoutubeURI: "corporis",
                                                        },
                                                    },
                                                },
                                                Text: "adipisci",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "et",
                                                            URI: "laboriosam",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sed",
                                                            YoutubeURI: "esse",
                                                        },
                                                    },
                                                },
                                                Text: "est",
                                            },
                                        },
                                        QuestionID: "in",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "itaque",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 3952804402930949344,
                                            HighLabel: "iste",
                                            Low: 537559002373622411,
                                            LowLabel: "aspernatur",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: false,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "voluptas",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "LEFT",
                                        Width: 5500847719944379584,
                                    },
                                    SourceURI: "enim",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "velit",
                                                Image: &shared.ImageInput{
                                                    AltText: "eveniet",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 4868780682979768935,
                                                    },
                                                    SourceURI: "et",
                                                },
                                                IsOther: false,
                                                Value: "laudantium",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "GO_TO_ACTION_UNSPECIFIED",
                                                GoToSectionID: "facere",
                                                Image: &shared.ImageInput{
                                                    AltText: "quis",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "LEFT",
                                                        Width: 3267167517764434498,
                                                    },
                                                    SourceURI: "perferendis",
                                                },
                                                IsOther: true,
                                                Value: "perferendis",
                                            },
                                        },
                                        Shuffle: false,
                                        Type: "CHECKBOX",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: true,
                                        IncludeYear: false,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "consequatur",
                                        MaxFileSize: "quia",
                                        MaxFiles: 5367116013832584196,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                            "IMAGE",
                                            "PDF",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "enim",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "aspernatur",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "et",
                                                        URI: "aliquid",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "totam",
                                                        YoutubeURI: "alias",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "omnis",
                                                        URI: "veritatis",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "qui",
                                                        YoutubeURI: "explicabo",
                                                    },
                                                },
                                            },
                                            Text: "nemo",
                                        },
                                        PointValue: 2779401446688930153,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "qui",
                                                        URI: "incidunt",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "qui",
                                                        YoutubeURI: "hic",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "dolore",
                                                        URI: "impedit",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "pariatur",
                                                        YoutubeURI: "sapiente",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "aperiam",
                                                        URI: "maiores",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "libero",
                                                        YoutubeURI: "dolores",
                                                    },
                                                },
                                            },
                                            Text: "et",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "ut",
                                                        URI: "quo",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "voluptatem",
                                                        YoutubeURI: "saepe",
                                                    },
                                                },
                                            },
                                            Text: "et",
                                        },
                                    },
                                    QuestionID: "doloribus",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "nisi",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 6735860509974746170,
                                        HighLabel: "molestiae",
                                        Low: 8966535707411915449,
                                        LowLabel: "nostrum",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: true,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: true,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "consectetur": "temporibus",
                            },
                            Title: "doloribus",
                            VideoItem: &shared.VideoItem{
                                Caption: "id",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 4574488806323159478,
                                    },
                                    YoutubeURI: "quam",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 968779009543895434,
                        },
                    },
                    DeleteItem: &shared.DeleteItemRequest{
                        Location: &shared.Location{
                            Index: 4344127675164179706,
                        },
                    },
                    MoveItem: &shared.MoveItemRequest{
                        NewLocation: &shared.Location{
                            Index: 1360592974098936303,
                        },
                        OriginalLocation: &shared.Location{
                            Index: 2049647356036480613,
                        },
                    },
                    UpdateFormInfo: &shared.UpdateFormInfoRequestInput{
                        Info: &shared.InfoInput{
                            Description: "omnis",
                            Title: "et",
                        },
                        UpdateMask: "a",
                    },
                    UpdateItem: &shared.UpdateItemRequestInput{
                        Item: &shared.ItemInput{
                            Description: "voluptatem",
                            ImageItem: &shared.ImageItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "voluptas",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 6033405793850872069,
                                    },
                                    SourceURI: "dolorum",
                                },
                            },
                            ItemID: "qui",
                            PageBreakItem: map[string]interface{}{
                                "sunt": "natus",
                            },
                            QuestionGroupItem: &shared.QuestionGroupItemInput{
                                Grid: &shared.GridInput{
                                    Columns: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "RESTART_FORM",
                                                GoToSectionID: "reiciendis",
                                                Image: &shared.ImageInput{
                                                    AltText: "temporibus",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "RIGHT",
                                                        Width: 4343310699711623317,
                                                    },
                                                    SourceURI: "voluptatum",
                                                },
                                                IsOther: true,
                                                Value: "et",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "RADIO",
                                    },
                                    ShuffleQuestions: true,
                                },
                                Image: &shared.ImageInput{
                                    AltText: "labore",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "CENTER",
                                        Width: 7314412807888287943,
                                    },
                                    SourceURI: "deserunt",
                                },
                                Questions: []shared.QuestionInput{
                                    shared.QuestionInput{
                                        ChoiceQuestion: &shared.ChoiceQuestionInput{
                                            Options: []shared.OptionInput{
                                                shared.OptionInput{
                                                    GoToAction: "SUBMIT_FORM",
                                                    GoToSectionID: "omnis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "explicabo",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 3902172864118496445,
                                                        },
                                                        SourceURI: "qui",
                                                    },
                                                    IsOther: false,
                                                    Value: "ut",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "NEXT_SECTION",
                                                    GoToSectionID: "quis",
                                                    Image: &shared.ImageInput{
                                                        AltText: "adipisci",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "CENTER",
                                                            Width: 5725741911587581094,
                                                        },
                                                        SourceURI: "facere",
                                                    },
                                                    IsOther: false,
                                                    Value: "et",
                                                },
                                                shared.OptionInput{
                                                    GoToAction: "RESTART_FORM",
                                                    GoToSectionID: "temporibus",
                                                    Image: &shared.ImageInput{
                                                        AltText: "cum",
                                                        Properties: &shared.MediaProperties{
                                                            Alignment: "ALIGNMENT_UNSPECIFIED",
                                                            Width: 7429771695958355309,
                                                        },
                                                        SourceURI: "non",
                                                    },
                                                    IsOther: true,
                                                    Value: "adipisci",
                                                },
                                            },
                                            Shuffle: false,
                                            Type: "RADIO",
                                        },
                                        DateQuestion: &shared.DateQuestion{
                                            IncludeTime: true,
                                            IncludeYear: false,
                                        },
                                        FileUploadQuestion: &shared.FileUploadQuestion{
                                            FolderID: "error",
                                            MaxFileSize: "eum",
                                            MaxFiles: 1721042829193643249,
                                            Types: []shared.FileUploadQuestionTypesEnum{
                                                "PDF",
                                            },
                                        },
                                        Grading: &shared.Grading{
                                            CorrectAnswers: &shared.CorrectAnswers{
                                                Answers: []shared.CorrectAnswer{
                                                    shared.CorrectAnswer{
                                                        Value: "esse",
                                                    },
                                                    shared.CorrectAnswer{
                                                        Value: "sint",
                                                    },
                                                },
                                            },
                                            GeneralFeedback: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "libero",
                                                            URI: "nostrum",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "sit",
                                                            YoutubeURI: "autem",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "totam",
                                                            URI: "cumque",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "error",
                                                            YoutubeURI: "enim",
                                                        },
                                                    },
                                                },
                                                Text: "recusandae",
                                            },
                                            PointValue: 6516567359299810617,
                                            WhenRight: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "ab",
                                                            URI: "fugiat",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "cumque",
                                                            YoutubeURI: "nesciunt",
                                                        },
                                                    },
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "voluptatem",
                                                            URI: "consequatur",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "nemo",
                                                            YoutubeURI: "dolor",
                                                        },
                                                    },
                                                },
                                                Text: "reprehenderit",
                                            },
                                            WhenWrong: &shared.Feedback{
                                                Material: []shared.ExtraMaterial{
                                                    shared.ExtraMaterial{
                                                        Link: &shared.TextLink{
                                                            DisplayText: "velit",
                                                            URI: "libero",
                                                        },
                                                        Video: &shared.VideoLink{
                                                            DisplayText: "omnis",
                                                            YoutubeURI: "sint",
                                                        },
                                                    },
                                                },
                                                Text: "enim",
                                            },
                                        },
                                        QuestionID: "magnam",
                                        Required: true,
                                        RowQuestion: &shared.RowQuestion{
                                            Title: "quibusdam",
                                        },
                                        ScaleQuestion: &shared.ScaleQuestion{
                                            High: 3728600122260743258,
                                            HighLabel: "rerum",
                                            Low: 462211148961836771,
                                            LowLabel: "atque",
                                        },
                                        TextQuestion: &shared.TextQuestion{
                                            Paragraph: false,
                                        },
                                        TimeQuestion: &shared.TimeQuestion{
                                            Duration: true,
                                        },
                                    },
                                },
                            },
                            QuestionItem: &shared.QuestionItemInput{
                                Image: &shared.ImageInput{
                                    AltText: "officiis",
                                    Properties: &shared.MediaProperties{
                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                        Width: 3290097293778856843,
                                    },
                                    SourceURI: "animi",
                                },
                                Question: &shared.QuestionInput{
                                    ChoiceQuestion: &shared.ChoiceQuestionInput{
                                        Options: []shared.OptionInput{
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "similique",
                                                Image: &shared.ImageInput{
                                                    AltText: "est",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "CENTER",
                                                        Width: 5642624655095294941,
                                                    },
                                                    SourceURI: "repudiandae",
                                                },
                                                IsOther: true,
                                                Value: "occaecati",
                                            },
                                            shared.OptionInput{
                                                GoToAction: "SUBMIT_FORM",
                                                GoToSectionID: "magni",
                                                Image: &shared.ImageInput{
                                                    AltText: "quia",
                                                    Properties: &shared.MediaProperties{
                                                        Alignment: "ALIGNMENT_UNSPECIFIED",
                                                        Width: 5480166450521866676,
                                                    },
                                                    SourceURI: "ea",
                                                },
                                                IsOther: true,
                                                Value: "ab",
                                            },
                                        },
                                        Shuffle: true,
                                        Type: "CHOICE_TYPE_UNSPECIFIED",
                                    },
                                    DateQuestion: &shared.DateQuestion{
                                        IncludeTime: false,
                                        IncludeYear: true,
                                    },
                                    FileUploadQuestion: &shared.FileUploadQuestion{
                                        FolderID: "laudantium",
                                        MaxFileSize: "repellat",
                                        MaxFiles: 1606274492688274719,
                                        Types: []shared.FileUploadQuestionTypesEnum{
                                            "SPREADSHEET",
                                        },
                                    },
                                    Grading: &shared.Grading{
                                        CorrectAnswers: &shared.CorrectAnswers{
                                            Answers: []shared.CorrectAnswer{
                                                shared.CorrectAnswer{
                                                    Value: "necessitatibus",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "repellat",
                                                },
                                                shared.CorrectAnswer{
                                                    Value: "sint",
                                                },
                                            },
                                        },
                                        GeneralFeedback: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "sit",
                                                        URI: "deleniti",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quidem",
                                                        YoutubeURI: "porro",
                                                    },
                                                },
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "rerum",
                                                        URI: "aut",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "quibusdam",
                                                        YoutubeURI: "adipisci",
                                                    },
                                                },
                                            },
                                            Text: "aut",
                                        },
                                        PointValue: 4922008057303996057,
                                        WhenRight: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "error",
                                                        URI: "debitis",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "alias",
                                                        YoutubeURI: "totam",
                                                    },
                                                },
                                            },
                                            Text: "fugit",
                                        },
                                        WhenWrong: &shared.Feedback{
                                            Material: []shared.ExtraMaterial{
                                                shared.ExtraMaterial{
                                                    Link: &shared.TextLink{
                                                        DisplayText: "fugiat",
                                                        URI: "necessitatibus",
                                                    },
                                                    Video: &shared.VideoLink{
                                                        DisplayText: "provident",
                                                        YoutubeURI: "voluptatem",
                                                    },
                                                },
                                            },
                                            Text: "voluptas",
                                        },
                                    },
                                    QuestionID: "pariatur",
                                    Required: false,
                                    RowQuestion: &shared.RowQuestion{
                                        Title: "et",
                                    },
                                    ScaleQuestion: &shared.ScaleQuestion{
                                        High: 8817418480462070721,
                                        HighLabel: "quasi",
                                        Low: 7515202337069457673,
                                        LowLabel: "reiciendis",
                                    },
                                    TextQuestion: &shared.TextQuestion{
                                        Paragraph: false,
                                    },
                                    TimeQuestion: &shared.TimeQuestion{
                                        Duration: true,
                                    },
                                },
                            },
                            TextItem: map[string]interface{}{
                                "nobis": "ad",
                                "ducimus": "deleniti",
                                "nisi": "ut",
                            },
                            Title: "aut",
                            VideoItem: &shared.VideoItem{
                                Caption: "porro",
                                Video: &shared.Video{
                                    Properties: &shared.MediaProperties{
                                        Alignment: "RIGHT",
                                        Width: 7655475005574756872,
                                    },
                                    YoutubeURI: "aut",
                                },
                            },
                        },
                        Location: &shared.Location{
                            Index: 8723596352842335158,
                        },
                        UpdateMask: "laudantium",
                    },
                    UpdateSettings: &shared.UpdateSettingsRequest{
                        Settings: &shared.FormSettings{
                            QuizSettings: &shared.QuizSettings{
                                IsQuiz: false,
                            },
                        },
                        UpdateMask: "et",
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "eius",
                TargetRevisionID: "qui",
            },
        },
    }
    
    res, err := s.Forms.FormsFormsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateFormResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### forms

* `FormsFormsBatchUpdate` - Change the form with a batch of updates.
* `FormsFormsCreate` - Create a new form using the title given in the provided form message in the request. *Important:* Only the form.info.title and form.info.document_title fields are copied to the new form. All other fields including the form description, items and settings are disallowed. To create a new form and add items, you must first call forms.create to create an empty form with a title and (optional) document title, and then call forms.update to add the items.
* `FormsFormsGet` - Get a form.
* `FormsFormsResponsesGet` - Get one response from the form.
* `FormsFormsResponsesList` - List a form's responses.
* `FormsFormsWatchesCreate` - Create a new watch. If a watch ID is provided, it must be unused. For each invoking project, the per form limit is one watch per Watch.EventType. A watch expires seven days after it is created (see Watch.expire_time).
* `FormsFormsWatchesDelete` - Delete a watch.
* `FormsFormsWatchesList` - Return a list of the watches owned by the invoking project. The maximum number of watches is two: For each invoker, the limit is one for each event type per form.
* `FormsFormsWatchesRenew` - Renew an existing watch for seven days. The state of the watch after renewal is `ACTIVE`, and the `expire_time` is seven days from the renewal. Renewing a watch in an error state (e.g. `SUSPENDED`) succeeds if the error is no longer present, but fail otherwise. After a watch has expired, RenewWatch returns `NOT_FOUND`.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
