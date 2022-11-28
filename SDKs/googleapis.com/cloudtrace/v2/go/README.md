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
    
    req := operations.CloudtraceProjectsTracesBatchWriteRequest{
        Security: operations.CloudtraceProjectsTracesBatchWriteSecurity{
            Option1: &operations.CloudtraceProjectsTracesBatchWriteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.CloudtraceProjectsTracesBatchWritePathParams{
            Name: "fuga",
        },
        QueryParams: operations.CloudtraceProjectsTracesBatchWriteQueryParams{
            DollarXgafv: "1",
            AccessToken: "facilis",
            Alt: "media",
            Callback: "cupiditate",
            Fields: "esse",
            Key: "magni",
            OauthToken: "sit",
            PrettyPrint: false,
            QuotaUser: "repudiandae",
            UploadType: "similique",
            UploadProtocol: "esse",
        },
        Request: &shared.BatchWriteSpansRequest{
            Spans: []shared.Span{
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "rem": shared.AttributeValue{
                                BoolValue: true,
                                IntValue: "iure",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 7412154669292656382,
                                    Value: "provident",
                                },
                            },
                        },
                        DroppedAttributesCount: 1882013532627511909,
                    },
                    ChildSpanCount: 5159362991102182092,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 2631232728389147934,
                        Value: "dolore",
                    },
                    EndTime: "recusandae",
                    Links: &shared.Links{
                        DroppedLinksCount: 900608263848019373,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "laborum": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "et",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 4107694427994788216,
                                                Value: "et",
                                            },
                                        },
                                        "voluptatem": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "eaque",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 5719352211019357973,
                                                Value: "perferendis",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 7120345347815777111,
                                },
                                SpanID: "labore",
                                TraceID: "qui",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "ut": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "consectetur",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 8154880525151637120,
                                                Value: "doloribus",
                                            },
                                        },
                                        "pariatur": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "incidunt",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 372072971954873086,
                                                Value: "iste",
                                            },
                                        },
                                        "sit": shared.AttributeValue{
                                            BoolValue: false,
                                            IntValue: "molestiae",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 2043847166453853718,
                                                Value: "et",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 6542411700234841629,
                                },
                                SpanID: "quo",
                                TraceID: "voluptas",
                                Type: "PARENT_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "ipsam",
                    ParentSpanID: "quod",
                    SameProcessAsParentSpan: true,
                    SpanID: "hic",
                    SpanKind: "CLIENT",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 8625985804930332770,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "et",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 93791829547420238,
                                        Value: "itaque",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7316543229150888277,
                                        Value: "rem",
                                    },
                                    LineNumber: "et",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 4871526677843426098,
                                            Value: "repellat",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 192662194052221150,
                                            Value: "neque",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 6145378819146129817,
                                        Value: "laboriosam",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 4325617781642148088,
                                        Value: "magnam",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "reiciendis",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 418373007686355712,
                                        Value: "voluptatum",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 3191746064594094765,
                                        Value: "soluta",
                                    },
                                    LineNumber: "quo",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 7581585206308525222,
                                            Value: "eos",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 5411230817567836379,
                                            Value: "magnam",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 1349466626456106616,
                                        Value: "ut",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 3153009224665982389,
                                        Value: "cupiditate",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "corrupti",
                    },
                    StartTime: "dolor",
                    Status: &shared.Status{
                        Code: 2238569681300579679,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "debitis": "ex",
                                "nam": "ex",
                            },
                            map[string]interface{}{
                                "vero": "repellendus",
                                "qui": "veniam",
                            },
                            map[string]interface{}{
                                "totam": "eius",
                                "nisi": "aliquid",
                                "fugiat": "sit",
                            },
                        },
                        Message: "dignissimos",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 8376081643456033423,
                        DroppedMessageEventsCount: 3300264040377190200,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "aliquid": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "veritatis",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 5823308888678265137,
                                                    Value: "sed",
                                                },
                                            },
                                            "aliquam": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "ex",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8057906358955275330,
                                                    Value: "ex",
                                                },
                                            },
                                            "vitae": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "veniam",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 6963093291005377551,
                                                    Value: "est",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 7670742053654497762,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 9069299569638429191,
                                        Value: "omnis",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "provident",
                                    ID: "commodi",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "sed",
                                },
                                Time: "fugiat",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "molestiae": shared.AttributeValue{
                                BoolValue: true,
                                IntValue: "eum",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 3162591810075885038,
                                    Value: "recusandae",
                                },
                            },
                            "distinctio": shared.AttributeValue{
                                BoolValue: true,
                                IntValue: "quia",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 3113692847381544996,
                                    Value: "quis",
                                },
                            },
                        },
                        DroppedAttributesCount: 1711403167402294839,
                    },
                    ChildSpanCount: 658028883953665887,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 2708742425483043233,
                        Value: "qui",
                    },
                    EndTime: "blanditiis",
                    Links: &shared.Links{
                        DroppedLinksCount: 1124888169288528810,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "consequatur": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "illum",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 4440095872882271002,
                                                Value: "saepe",
                                            },
                                        },
                                        "culpa": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "dolor",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 2720658529666853584,
                                                Value: "nihil",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 4291946209512453872,
                                },
                                SpanID: "exercitationem",
                                TraceID: "deserunt",
                                Type: "TYPE_UNSPECIFIED",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "aspernatur": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "ut",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 5050253948894144695,
                                                Value: "iste",
                                            },
                                        },
                                        "quod": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "officiis",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 8054518398797532132,
                                                Value: "esse",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 1691434432587593857,
                                },
                                SpanID: "adipisci",
                                TraceID: "aspernatur",
                                Type: "CHILD_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "sapiente",
                    ParentSpanID: "at",
                    SameProcessAsParentSpan: true,
                    SpanID: "dolor",
                    SpanKind: "SERVER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 4318552592500431206,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "voluptatibus",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 2057425696130468793,
                                        Value: "aut",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 5472948715167207246,
                                        Value: "ea",
                                    },
                                    LineNumber: "necessitatibus",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 8504318534870582666,
                                            Value: "aut",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 1449417248362810995,
                                            Value: "voluptatem",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 4375476757655588205,
                                        Value: "maxime",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 6317859072742515473,
                                        Value: "quod",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "voluptatum",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 6580143705113543846,
                                        Value: "aut",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 394045682720935338,
                                        Value: "iusto",
                                    },
                                    LineNumber: "in",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 3460064967972003242,
                                            Value: "cum",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 668873899885723210,
                                            Value: "nostrum",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7466532413770905939,
                                        Value: "perspiciatis",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 8685251208025816075,
                                        Value: "ut",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "veniam",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 8412716791473707099,
                                        Value: "officia",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7605692820699002696,
                                        Value: "ipsum",
                                    },
                                    LineNumber: "adipisci",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 3020508955706901651,
                                            Value: "molestiae",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 7372117690145769185,
                                            Value: "ut",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7895065323425861377,
                                        Value: "facere",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 2607881367854918601,
                                        Value: "similique",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "odio",
                    },
                    StartTime: "adipisci",
                    Status: &shared.Status{
                        Code: 2554508371746394260,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "et": "doloribus",
                            },
                            map[string]interface{}{
                                "nam": "sint",
                            },
                        },
                        Message: "repudiandae",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 3057003022441306605,
                        DroppedMessageEventsCount: 4567130275734661693,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "qui": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "qui",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 3220956862257110409,
                                                    Value: "laboriosam",
                                                },
                                            },
                                            "similique": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "et",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8772352799208422705,
                                                    Value: "qui",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 2254885794860710070,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 6423926587202505410,
                                        Value: "error",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "deserunt",
                                    ID: "recusandae",
                                    Type: "RECEIVED",
                                    UncompressedSizeBytes: "ut",
                                },
                                Time: "culpa",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "est": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "et",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 5912980749044626026,
                                                    Value: "veritatis",
                                                },
                                            },
                                            "ut": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "minus",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8176708107005068801,
                                                    Value: "minima",
                                                },
                                            },
                                            "consequatur": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "voluptate",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 1180761073515899667,
                                                    Value: "laudantium",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 534137970119690627,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 3152267740478274112,
                                        Value: "libero",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "ut",
                                    ID: "est",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "quae",
                                },
                                Time: "sint",
                            },
                        },
                    },
                },
                shared.Span{
                    Attributes: &shared.Attributes{
                        AttributeMap: map[string]shared.AttributeValue{
                            "magni": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "eveniet",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 1872124498889570851,
                                    Value: "qui",
                                },
                            },
                            "fugit": shared.AttributeValue{
                                BoolValue: false,
                                IntValue: "ducimus",
                                StringValue: &shared.TruncatableString{
                                    TruncatedByteCount: 4611970130455200035,
                                    Value: "quia",
                                },
                            },
                        },
                        DroppedAttributesCount: 5837814512825710107,
                    },
                    ChildSpanCount: 3689584114546443757,
                    DisplayName: &shared.TruncatableString{
                        TruncatedByteCount: 8253050329645548112,
                        Value: "dolorum",
                    },
                    EndTime: "in",
                    Links: &shared.Links{
                        DroppedLinksCount: 745925676084747689,
                        Link: []shared.Link{
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "explicabo": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "consequatur",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 714048778457649626,
                                                Value: "blanditiis",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 3382536036547342098,
                                },
                                SpanID: "nemo",
                                TraceID: "ad",
                                Type: "PARENT_LINKED_SPAN",
                            },
                            shared.Link{
                                Attributes: &shared.Attributes{
                                    AttributeMap: map[string]shared.AttributeValue{
                                        "velit": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "eum",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 5387308147037031214,
                                                Value: "atque",
                                            },
                                        },
                                        "et": shared.AttributeValue{
                                            BoolValue: true,
                                            IntValue: "saepe",
                                            StringValue: &shared.TruncatableString{
                                                TruncatedByteCount: 6765931371440523951,
                                                Value: "amet",
                                            },
                                        },
                                    },
                                    DroppedAttributesCount: 647415043653186772,
                                },
                                SpanID: "consectetur",
                                TraceID: "quo",
                                Type: "PARENT_LINKED_SPAN",
                            },
                        },
                    },
                    Name: "vel",
                    ParentSpanID: "molestiae",
                    SameProcessAsParentSpan: true,
                    SpanID: "dolor",
                    SpanKind: "PRODUCER",
                    StackTrace: &shared.StackTrace{
                        StackFrames: &shared.StackFrames{
                            DroppedFramesCount: 7497798725426883901,
                            Frame: []shared.StackFrame{
                                shared.StackFrame{
                                    ColumnNumber: "debitis",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 8357011285286565884,
                                        Value: "et",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 5074184114943908484,
                                        Value: "consequuntur",
                                    },
                                    LineNumber: "ea",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 5548937277649397644,
                                            Value: "voluptas",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 2306189342091941383,
                                            Value: "temporibus",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7990343170107771072,
                                        Value: "eius",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 2757753363505179891,
                                        Value: "illo",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "debitis",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 4816527767106693013,
                                        Value: "ut",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 7541775597248545568,
                                        Value: "mollitia",
                                    },
                                    LineNumber: "voluptas",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 6890724580885051093,
                                            Value: "libero",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 1130388397918876596,
                                            Value: "optio",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 2522083041826811291,
                                        Value: "dicta",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 4568021486366470855,
                                        Value: "quis",
                                    },
                                },
                                shared.StackFrame{
                                    ColumnNumber: "aut",
                                    FileName: &shared.TruncatableString{
                                        TruncatedByteCount: 1443724628196768607,
                                        Value: "officiis",
                                    },
                                    FunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 8446368677072091442,
                                        Value: "non",
                                    },
                                    LineNumber: "sit",
                                    LoadModule: &shared.Module{
                                        BuildID: &shared.TruncatableString{
                                            TruncatedByteCount: 5120365771785343002,
                                            Value: "sapiente",
                                        },
                                        Module: &shared.TruncatableString{
                                            TruncatedByteCount: 4567861104280258440,
                                            Value: "facilis",
                                        },
                                    },
                                    OriginalFunctionName: &shared.TruncatableString{
                                        TruncatedByteCount: 1006122998850990026,
                                        Value: "dolor",
                                    },
                                    SourceVersion: &shared.TruncatableString{
                                        TruncatedByteCount: 2459444971568688245,
                                        Value: "ut",
                                    },
                                },
                            },
                        },
                        StackTraceHashID: "quisquam",
                    },
                    StartTime: "incidunt",
                    Status: &shared.Status{
                        Code: 4922047298306025132,
                        Details: []map[string]interface{}{
                            map[string]interface{}{
                                "quae": "distinctio",
                            },
                            map[string]interface{}{
                                "omnis": "dolores",
                                "architecto": "labore",
                                "sit": "placeat",
                            },
                        },
                        Message: "aut",
                    },
                    TimeEvents: &shared.TimeEvents{
                        DroppedAnnotationsCount: 1305834826686730245,
                        DroppedMessageEventsCount: 6068238350177432791,
                        TimeEvent: []shared.TimeEvent{
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "excepturi": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "recusandae",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 31602809576134454,
                                                    Value: "cumque",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 7895267545288934660,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 6791283100892614221,
                                        Value: "ipsa",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "quaerat",
                                    ID: "voluptates",
                                    Type: "TYPE_UNSPECIFIED",
                                    UncompressedSizeBytes: "quis",
                                },
                                Time: "qui",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "nesciunt": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "deserunt",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 5287675374053131560,
                                                    Value: "sit",
                                                },
                                            },
                                            "consequatur": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "nihil",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8928422274497150829,
                                                    Value: "ipsum",
                                                },
                                            },
                                            "illum": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "provident",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 3137147292797088911,
                                                    Value: "temporibus",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 4375435975116264586,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 8731453672231866571,
                                        Value: "fugit",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "velit",
                                    ID: "repellat",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "nesciunt",
                                },
                                Time: "ab",
                            },
                            shared.TimeEvent{
                                Annotation: &shared.Annotation{
                                    Attributes: &shared.Attributes{
                                        AttributeMap: map[string]shared.AttributeValue{
                                            "ut": shared.AttributeValue{
                                                BoolValue: false,
                                                IntValue: "libero",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 1561017435673571789,
                                                    Value: "dolorum",
                                                },
                                            },
                                            "qui": shared.AttributeValue{
                                                BoolValue: true,
                                                IntValue: "ea",
                                                StringValue: &shared.TruncatableString{
                                                    TruncatedByteCount: 8362301776994056438,
                                                    Value: "aut",
                                                },
                                            },
                                        },
                                        DroppedAttributesCount: 376069413832377877,
                                    },
                                    Description: &shared.TruncatableString{
                                        TruncatedByteCount: 1228101723310582998,
                                        Value: "dignissimos",
                                    },
                                },
                                MessageEvent: &shared.MessageEvent{
                                    CompressedSizeBytes: "et",
                                    ID: "perferendis",
                                    Type: "SENT",
                                    UncompressedSizeBytes: "quos",
                                },
                                Time: "voluptates",
                            },
                        },
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.CloudtraceProjectsTracesBatchWrite(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `CloudtraceProjectsTracesBatchWrite` - Batch writes new spans to new or existing traces. You cannot update existing spans.
* `CloudtraceProjectsTracesSpansCreateSpan` - Creates a new span.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
