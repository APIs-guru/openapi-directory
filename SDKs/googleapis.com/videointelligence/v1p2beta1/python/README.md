# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VideointelligenceVideosAnnotateRequest(
    security=operations.VideointelligenceVideosAnnotateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.VideointelligenceVideosAnnotateQueryParams(
        dollar_xgafv="2",
        access_token="quisquam",
        alt="json",
        callback="aut",
        fields="qui",
        key="voluptas",
        oauth_token="rerum",
        pretty_print=True,
        quota_user="quaerat",
        upload_type="aut",
        upload_protocol="minima",
    ),
    request=shared.GoogleCloudVideointelligenceV1p2beta1AnnotateVideoRequest(
        features=[
            "TEXT_DETECTION",
        ],
        input_content="debitis",
        input_uri="voluptatem",
        location_id="cumque",
        output_uri="dolor",
        video_context=shared.GoogleCloudVideointelligenceV1p2beta1VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1ExplicitContentDetectionConfig(
                model="laudantium",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1FaceDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=False,
                model="ab",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1LabelDetectionConfig(
                frame_confidence_threshold=63.200001,
                label_detection_mode="LABEL_DETECTION_MODE_UNSPECIFIED",
                model="perferendis",
                stationary_camera=True,
                video_confidence_threshold=69.099998,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1p2beta1ObjectTrackingConfig(
                model="est",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1PersonDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=True,
                include_pose_landmarks=True,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="eum",
                    start_time_offset="sint",
                ),
                shared.GoogleCloudVideointelligenceV1p2beta1VideoSegment(
                    end_time_offset="et",
                    start_time_offset="totam",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1ShotChangeDetectionConfig(
                model="voluptatum",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1p2beta1SpeechTranscriptionConfig(
                audio_tracks=[
                    9061832994296693596,
                    2724327517837439364,
                ],
                diarization_speaker_count=2602192978294191992,
                enable_automatic_punctuation=True,
                enable_speaker_diarization=True,
                enable_word_confidence=True,
                filter_profanity=False,
                language_code="doloribus",
                max_alternatives=6273747709307585794,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "similique",
                            "facere",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "sequi",
                            "ut",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p2beta1SpeechContext(
                        phrases=[
                            "dolorum",
                            "rerum",
                            "officia",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1p2beta1TextDetectionConfig(
                language_hints=[
                    "neque",
                ],
                model="ut",
            ),
        ),
    ),
)
    
res = s.videos.videointelligence_videos_annotate(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### videos

* `videointelligence_videos_annotate` - Performs asynchronous video annotation. Progress and results can be retrieved through the `google.longrunning.Operations` interface. `Operation.metadata` contains `AnnotateVideoProgress` (progress). `Operation.response` contains `AnnotateVideoResponse` (results).

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
