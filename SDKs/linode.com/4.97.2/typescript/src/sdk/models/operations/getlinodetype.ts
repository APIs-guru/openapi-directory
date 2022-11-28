import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLinodeTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=typeId" })
  typeId: string;
}


export class GetLinodeTypeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLinodeTypePathParams;
}


export class GetLinodeTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linodeType?: shared.LinodeType;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLinodeTypeDefaultApplicationJsonObject?: GetLinodeTypeDefaultApplicationJson;
}
