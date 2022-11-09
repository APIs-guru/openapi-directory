import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscvoverTunersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=newDevicesOnly" })
  newDevicesOnly?: boolean;
}


export class DiscvoverTunersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DiscvoverTunersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DiscvoverTunersQueryParams;

  @Metadata()
  security: DiscvoverTunersSecurity;
}


export class DiscvoverTunersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TunerHostInfo })
  tunerHostInfos?: shared.TunerHostInfo[];
}
