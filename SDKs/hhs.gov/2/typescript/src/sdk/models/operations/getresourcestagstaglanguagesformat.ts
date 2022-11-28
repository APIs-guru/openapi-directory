import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesTagsTagLanguagesFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesTagsTagLanguagesFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesTagsTagLanguagesFormatPathParams;
}


export class GetResourcesTagsTagLanguagesFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TagLanguageMarshallerWrapped })
  tagLanguageMarshallerWrappeds?: shared.TagLanguageMarshallerWrapped[];
}
