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
    
    req := operations.VideointelligenceVideosAnnotateRequest{
        Security: operations.VideointelligenceVideosAnnotateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.VideointelligenceVideosAnnotateQueryParams{
            DollarXgafv: "2",
            AccessToken: "quisquam",
            Alt: "json",
            Callback: "aut",
            Fields: "qui",
            Key: "voluptas",
            OauthToken: "rerum",
            PrettyPrint: true,
            QuotaUser: "quaerat",
            UploadType: "aut",
            UploadProtocol: "minima",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequestFeaturesEnum{
                "TEXT_DETECTION",
            },
            InputContent: "debitis",
            InputURI: "voluptatem",
            LocationID: "cumque",
            OutputURI: "dolor",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p2beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig{
                    Model: "laudantium",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    Model: "ab",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 63.200001,
                    LabelDetectionMode: "LABEL_DETECTION_MODE_UNSPECIFIED",
                    Model: "perferendis",
                    StationaryCamera: true,
                    VideoConfidenceThreshold: 69.099998,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig{
                    Model: "est",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: true,
                    IncludePoseLandmarks: true,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "eum",
                        StartTimeOffset: "sint",
                    },
                    shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment{
                        EndTimeOffset: "et",
                        StartTimeOffset: "totam",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig{
                    Model: "voluptatum",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        9061832994296693596,
                        2724327517837439364,
                    },
                    DiarizationSpeakerCount: 2602192978294191992,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: true,
                    EnableWordConfidence: true,
                    FilterProfanity: false,
                    LanguageCode: "doloribus",
                    MaxAlternatives: 6273747709307585794,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "similique",
                                "facere",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "sequi",
                                "ut",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext{
                            Phrases: []string{
                                "dolorum",
                                "rerum",
                                "officia",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "neque",
                    },
                    Model: "ut",
                },
            },
        },
    }
    
    res, err := s.Videos.VideointelligenceVideosAnnotate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### videos

* `VideointelligenceVideosAnnotate` - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
