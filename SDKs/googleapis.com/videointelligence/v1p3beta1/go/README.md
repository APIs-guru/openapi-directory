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
            DollarXgafv: "1",
            AccessToken: "iusto",
            Alt: "json",
            Callback: "animi",
            Fields: "aperiam",
            Key: "odio",
            OauthToken: "repellat",
            PrettyPrint: true,
            QuotaUser: "doloribus",
            UploadType: "porro",
            UploadProtocol: "sequi",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum{
                "TEXT_DETECTION",
                "SHOT_CHANGE_DETECTION",
                "LOGO_RECOGNITION",
            },
            InputContent: "sed",
            InputURI: "qui",
            LocationID: "dolores",
            OutputURI: "sed",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p3beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig{
                    Model: "quibusdam",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: false,
                    Model: "rerum",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 28.200001,
                    LabelDetectionMode: "SHOT_AND_FRAME_MODE",
                    Model: "illo",
                    StationaryCamera: true,
                    VideoConfidenceThreshold: 25.200001,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig{
                    Model: "maxime",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "velit",
                        StartTimeOffset: "quia",
                    },
                    shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment{
                        EndTimeOffset: "non",
                        StartTimeOffset: "ab",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig{
                    Model: "eos",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        3315239506547643892,
                        2170068001213528811,
                        1582343921395994185,
                    },
                    DiarizationSpeakerCount: 4542759901218261428,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: true,
                    EnableWordConfidence: true,
                    FilterProfanity: true,
                    LanguageCode: "accusamus",
                    MaxAlternatives: 3595861241565795942,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                            Phrases: []string{
                                "est",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                            Phrases: []string{
                                "et",
                                "ducimus",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext{
                            Phrases: []string{
                                "officiis",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "est",
                        "voluptas",
                        "quis",
                    },
                    Model: "in",
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
