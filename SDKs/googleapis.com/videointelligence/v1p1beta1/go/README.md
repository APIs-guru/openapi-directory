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
            AccessToken: "delectus",
            Alt: "proto",
            Callback: "autem",
            Fields: "aperiam",
            Key: "similique",
            OauthToken: "molestiae",
            PrettyPrint: false,
            QuotaUser: "ipsum",
            UploadType: "sit",
            UploadProtocol: "nisi",
        },
        Request: &shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequestFeaturesEnum{
                "LOGO_RECOGNITION",
                "OBJECT_TRACKING",
                "FACE_DETECTION",
            },
            InputContent: "labore",
            InputURI: "consequatur",
            LocationID: "enim",
            OutputURI: "molestias",
            VideoContext: &shared.GoogleCloudVideointelligenceV1p1beta1VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig{
                    Model: "nam",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: true,
                    Model: "qui",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig{
                    FrameConfidenceThreshold: 44.200001,
                    LabelDetectionMode: "LABEL_DETECTION_MODE_UNSPECIFIED",
                    Model: "deserunt",
                    StationaryCamera: true,
                    VideoConfidenceThreshold: 72.099998,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig{
                    Model: "alias",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: false,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "doloribus",
                        StartTimeOffset: "blanditiis",
                    },
                    shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment{
                        EndTimeOffset: "maiores",
                        StartTimeOffset: "aliquid",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig{
                    Model: "a",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        1532090172114569710,
                    },
                    DiarizationSpeakerCount: 1203560969764169467,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: false,
                    EnableWordConfidence: true,
                    FilterProfanity: false,
                    LanguageCode: "delectus",
                    MaxAlternatives: 5800051945060985895,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "sed",
                                "veniam",
                            },
                        },
                        shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext{
                            Phrases: []string{
                                "voluptas",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig{
                    LanguageHints: []string{
                        "sint",
                        "autem",
                    },
                    Model: "vel",
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
