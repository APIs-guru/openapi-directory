import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesTagsTagLanguagesFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesTagsTagLanguagesFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesTagsTagLanguagesFormatPathParams;
}


export class GetResourcesTagsTagLanguagesFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagLanguageMarshallerWrapped })
  tagLanguageMarshallerWrappeds?: shared.TagLanguageMarshallerWrapped[];
}
