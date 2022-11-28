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
            AccessToken: "eos",
            Alt: "media",
            Callback: "eligendi",
            Fields: "cumque",
            Key: "autem",
            OauthToken: "et",
            PrettyPrint: true,
            QuotaUser: "assumenda",
            UploadType: "consectetur",
            UploadProtocol: "aut",
        },
        Request: &shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequest{
            Features: []shared.GoogleCloudVideointelligenceV1beta2AnnotateVideoRequestFeaturesEnum{
                "LOGO_RECOGNITION",
                "LABEL_DETECTION",
            },
            InputContent: "voluptatem",
            InputURI: "tenetur",
            LocationID: "nostrum",
            OutputURI: "quia",
            VideoContext: &shared.GoogleCloudVideointelligenceV1beta2VideoContext{
                ExplicitContentDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig{
                    Model: "dolores",
                },
                FaceDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig{
                    IncludeAttributes: true,
                    IncludeBoundingBoxes: true,
                    Model: "unde",
                },
                LabelDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig{
                    FrameConfidenceThreshold: 21.100000,
                    LabelDetectionMode: "SHOT_AND_FRAME_MODE",
                    Model: "nisi",
                    StationaryCamera: true,
                    VideoConfidenceThreshold: 47.099998,
                },
                ObjectTrackingConfig: &shared.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig{
                    Model: "molestiae",
                },
                PersonDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig{
                    IncludeAttributes: false,
                    IncludeBoundingBoxes: false,
                    IncludePoseLandmarks: true,
                },
                Segments: []shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                    shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                        EndTimeOffset: "quo",
                        StartTimeOffset: "sapiente",
                    },
                    shared.GoogleCloudVideointelligenceV1beta2VideoSegment{
                        EndTimeOffset: "quis",
                        StartTimeOffset: "corporis",
                    },
                },
                ShotChangeDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig{
                    Model: "numquam",
                },
                SpeechTranscriptionConfig: &shared.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig{
                    AudioTracks: []int32{
                        8962893094305007659,
                        5704955519581026449,
                    },
                    DiarizationSpeakerCount: 5830924068923634366,
                    EnableAutomaticPunctuation: true,
                    EnableSpeakerDiarization: false,
                    EnableWordConfidence: true,
                    FilterProfanity: false,
                    LanguageCode: "sint",
                    MaxAlternatives: 7175661597140912085,
                    SpeechContexts: []shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                        shared.GoogleCloudVideointelligenceV1beta2SpeechContext{
                            Phrases: []string{
                                "voluptas",
                            },
                        },
                    },
                },
                TextDetectionConfig: &shared.GoogleCloudVideointelligenceV1beta2TextDetectionConfig{
                    LanguageHints: []string{
                        "quam",
                        "et",
                        "commodi",
                    },
                    Model: "nisi",
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
