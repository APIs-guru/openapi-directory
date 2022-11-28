import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesTagsTagTypesFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesTagsTagTypesFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesTagsTagTypesFormatPathParams;
}


export class GetResourcesTagsTagTypesFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TagTypeMarshallerWrapped })
  tagTypeMarshallerWrappeds?: shared.TagTypeMarshallerWrapped[];
}
