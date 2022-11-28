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
        dollar_xgafv="1",
        access_token="iusto",
        alt="json",
        callback="animi",
        fields="aperiam",
        key="odio",
        oauth_token="repellat",
        pretty_print=True,
        quota_user="doloribus",
        upload_type="porro",
        upload_protocol="sequi",
    ),
    request=shared.GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest(
        features=[
            "TEXT_DETECTION",
            "SHOT_CHANGE_DETECTION",
            "LOGO_RECOGNITION",
        ],
        input_content="sed",
        input_uri="qui",
        location_id="dolores",
        output_uri="sed",
        video_context=shared.GoogleCloudVideointelligenceV1p3beta1VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig(
                model="quibusdam",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig(
                include_attributes=True,
                include_bounding_boxes=False,
                model="rerum",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig(
                frame_confidence_threshold=28.200001,
                label_detection_mode="SHOT_AND_FRAME_MODE",
                model="illo",
                stationary_camera=True,
                video_confidence_threshold=25.200001,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig(
                model="maxime",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig(
                include_attributes=True,
                include_bounding_boxes=False,
                include_pose_landmarks=False,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment(
                    end_time_offset="velit",
                    start_time_offset="quia",
                ),
                shared.GoogleCloudVideointelligenceV1p3beta1VideoSegment(
                    end_time_offset="non",
                    start_time_offset="ab",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig(
                model="eos",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig(
                audio_tracks=[
                    3315239506547643892,
                    2170068001213528811,
                    1582343921395994185,
                ],
                diarization_speaker_count=4542759901218261428,
                enable_automatic_punctuation=True,
                enable_speaker_diarization=True,
                enable_word_confidence=True,
                filter_profanity=True,
                language_code="accusamus",
                max_alternatives=3595861241565795942,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext(
                        phrases=[
                            "est",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext(
                        phrases=[
                            "et",
                            "ducimus",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p3beta1SpeechContext(
                        phrases=[
                            "officiis",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig(
                language_hints=[
                    "est",
                    "voluptas",
                    "quis",
                ],
                model="in",
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
