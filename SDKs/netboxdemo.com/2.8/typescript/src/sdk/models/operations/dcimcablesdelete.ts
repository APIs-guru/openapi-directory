import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimCablesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimCablesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimCablesDeletePathParams;
}


export class DcimCablesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
