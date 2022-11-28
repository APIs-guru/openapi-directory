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
        access_token="delectus",
        alt="proto",
        callback="autem",
        fields="aperiam",
        key="similique",
        oauth_token="molestiae",
        pretty_print=False,
        quota_user="ipsum",
        upload_type="sit",
        upload_protocol="nisi",
    ),
    request=shared.GoogleCloudVideointelligenceV1p1beta1AnnotateVideoRequest(
        features=[
            "LOGO_RECOGNITION",
            "OBJECT_TRACKING",
            "FACE_DETECTION",
        ],
        input_content="labore",
        input_uri="consequatur",
        location_id="enim",
        output_uri="molestias",
        video_context=shared.GoogleCloudVideointelligenceV1p1beta1VideoContext(
            explicit_content_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1ExplicitContentDetectionConfig(
                model="nam",
            ),
            face_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1FaceDetectionConfig(
                include_attributes=False,
                include_bounding_boxes=True,
                model="qui",
            ),
            label_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1LabelDetectionConfig(
                frame_confidence_threshold=44.200001,
                label_detection_mode="LABEL_DETECTION_MODE_UNSPECIFIED",
                model="deserunt",
                stationary_camera=True,
                video_confidence_threshold=72.099998,
            ),
            object_tracking_config=shared.GoogleCloudVideointelligenceV1p1beta1ObjectTrackingConfig(
                model="alias",
            ),
            person_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1PersonDetectionConfig(
                include_attributes=True,
                include_bounding_boxes=False,
                include_pose_landmarks=False,
            ),
            segments=[
                shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment(
                    end_time_offset="doloribus",
                    start_time_offset="blanditiis",
                ),
                shared.GoogleCloudVideointelligenceV1p1beta1VideoSegment(
                    end_time_offset="maiores",
                    start_time_offset="aliquid",
                ),
            ],
            shot_change_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1ShotChangeDetectionConfig(
                model="a",
            ),
            speech_transcription_config=shared.GoogleCloudVideointelligenceV1p1beta1SpeechTranscriptionConfig(
                audio_tracks=[
                    1532090172114569710,
                ],
                diarization_speaker_count=1203560969764169467,
                enable_automatic_punctuation=True,
                enable_speaker_diarization=False,
                enable_word_confidence=True,
                filter_profanity=False,
                language_code="delectus",
                max_alternatives=5800051945060985895,
                speech_contexts=[
                    shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext(
                        phrases=[
                            "sed",
                            "veniam",
                        ],
                    ),
                    shared.GoogleCloudVideointelligenceV1p1beta1SpeechContext(
                        phrases=[
                            "voluptas",
                        ],
                    ),
                ],
            ),
            text_detection_config=shared.GoogleCloudVideointelligenceV1p1beta1TextDetectionConfig(
                language_hints=[
                    "sint",
                    "autem",
                ],
                model="vel",
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
