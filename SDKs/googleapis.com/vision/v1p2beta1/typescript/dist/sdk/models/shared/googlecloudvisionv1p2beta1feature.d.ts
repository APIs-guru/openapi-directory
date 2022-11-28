import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudVisionV1p2beta1FeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    FaceDetection = "FACE_DETECTION",
    LandmarkDetection = "LANDMARK_DETECTION",
    LogoDetection = "LOGO_DETECTION",
    LabelDetection = "LABEL_DETECTION",
    TextDetection = "TEXT_DETECTION",
    DocumentTextDetection = "DOCUMENT_TEXT_DETECTION",
    SafeSearchDetection = "SAFE_SEARCH_DETECTION",
    ImageProperties = "IMAGE_PROPERTIES",
    CropHints = "CROP_HINTS",
    WebDetection = "WEB_DETECTION",
    ProductSearch = "PRODUCT_SEARCH",
    ObjectLocalization = "OBJECT_LOCALIZATION"
}
/**
 * The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
**/
export declare class GoogleCloudVisionV1p2beta1Feature extends SpeakeasyBase {
    maxResults?: number;
    model?: string;
    type?: GoogleCloudVisionV1p2beta1FeatureTypeEnum;
}
