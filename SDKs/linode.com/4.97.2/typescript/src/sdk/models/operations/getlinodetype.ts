import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=typeId" })
  typeId: string;
}


export class GetLinodeTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeTypePathParams;
}


export class GetLinodeTypeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linodeType?: shared.LinodeType;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeTypeDefaultApplicationJsonObject?: GetLinodeTypeDefaultApplicationJson;
}
