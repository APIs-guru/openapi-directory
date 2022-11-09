import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimPowerFeedsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerFeedsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerFeedsDeletePathParams;
}


export class DcimPowerFeedsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
