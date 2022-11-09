import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesTagsTagTypesFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesTagsTagTypesFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesTagsTagTypesFormatPathParams;
}


export class GetResourcesTagsTagTypesFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagTypeMarshallerWrapped })
  tagTypeMarshallerWrappeds?: shared.TagTypeMarshallerWrapped[];
}
