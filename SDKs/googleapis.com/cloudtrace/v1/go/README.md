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
    
    req := operations.CloudtraceProjectsPatchTracesRequest{
        Security: operations.CloudtraceProjectsPatchTracesSecurity{
            Option1: &operations.CloudtraceProjectsPatchTracesSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.CloudtraceProjectsPatchTracesPathParams{
            ProjectID: "aut",
        },
        QueryParams: operations.CloudtraceProjectsPatchTracesQueryParams{
            DollarXgafv: "2",
            AccessToken: "est",
            Alt: "media",
            Callback: "qui",
            Fields: "eius",
            Key: "officia",
            OauthToken: "similique",
            PrettyPrint: false,
            QuotaUser: "blanditiis",
            UploadType: "itaque",
            UploadProtocol: "velit",
        },
        Request: &shared.Traces{
            Traces: []shared.Trace{
                shared.Trace{
                    ProjectID: "mollitia",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "consectetur",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "accusantium": "et",
                                "blanditiis": "quia",
                            },
                            Name: "hic",
                            ParentSpanID: "nulla",
                            SpanID: "quis",
                            StartTime: "laboriosam",
                        },
                        shared.TraceSpan{
                            EndTime: "soluta",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "omnis": "repellat",
                                "ut": "sint",
                                "velit": "quos",
                            },
                            Name: "deleniti",
                            ParentSpanID: "quasi",
                            SpanID: "asperiores",
                            StartTime: "voluptas",
                        },
                        shared.TraceSpan{
                            EndTime: "ipsum",
                            Kind: "RPC_CLIENT",
                            Labels: map[string]string{
                                "iusto": "et",
                                "qui": "quibusdam",
                                "vero": "sunt",
                            },
                            Name: "non",
                            ParentSpanID: "quae",
                            SpanID: "architecto",
                            StartTime: "labore",
                        },
                    },
                    TraceID: "quo",
                },
                shared.Trace{
                    ProjectID: "harum",
                    Spans: []shared.TraceSpan{
                        shared.TraceSpan{
                            EndTime: "et",
                            Kind: "SPAN_KIND_UNSPECIFIED",
                            Labels: map[string]string{
                                "ut": "dignissimos",
                                "omnis": "quae",
                                "nisi": "sapiente",
                            },
                            Name: "necessitatibus",
                            ParentSpanID: "voluptatem",
                            SpanID: "tempora",
                            StartTime: "sed",
                        },
                        shared.TraceSpan{
                            EndTime: "non",
                            Kind: "RPC_SERVER",
                            Labels: map[string]string{
                                "in": "voluptas",
                            },
                            Name: "reiciendis",
                            ParentSpanID: "reiciendis",
                            SpanID: "sit",
                            StartTime: "vel",
                        },
                    },
                    TraceID: "omnis",
                },
            },
        },
    }
    
    res, err := s.Projects.CloudtraceProjectsPatchTraces(ctx, req)
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

* `CloudtraceProjectsPatchTraces` - Sends new traces to Cloud Trace or updates existing traces. If the ID of a trace that you send matches that of an existing trace, any fields in the existing trace and its spans are overwritten by the provided values, and any new fields provided are merged with the existing trace data. If the ID does not match, a new trace is created.
* `CloudtraceProjectsTracesGet` - Gets a single trace by its ID.
* `CloudtraceProjectsTracesList` - Returns a list of traces that match the specified filter conditions.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
