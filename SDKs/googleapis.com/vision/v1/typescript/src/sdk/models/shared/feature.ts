import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FeatureTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    FaceDetection = "FACE_DETECTION"
,    LandmarkDetection = "LANDMARK_DETECTION"
,    LogoDetection = "LOGO_DETECTION"
,    LabelDetection = "LABEL_DETECTION"
,    TextDetection = "TEXT_DETECTION"
,    DocumentTextDetection = "DOCUMENT_TEXT_DETECTION"
,    SafeSearchDetection = "SAFE_SEARCH_DETECTION"
,    ImageProperties = "IMAGE_PROPERTIES"
,    CropHints = "CROP_HINTS"
,    WebDetection = "WEB_DETECTION"
,    ProductSearch = "PRODUCT_SEARCH"
,    ObjectLocalization = "OBJECT_LOCALIZATION"
}


// Feature
/** 
 * The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.
**/
export class Feature extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=type" })
  type?: FeatureTypeEnum;
}
