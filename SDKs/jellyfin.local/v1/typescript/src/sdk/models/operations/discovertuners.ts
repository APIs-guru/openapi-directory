import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DiscoverTunersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=newDevicesOnly" })
  newDevicesOnly?: boolean;
}


export class DiscoverTunersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DiscoverTunersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DiscoverTunersQueryParams;

  @Metadata()
  security: DiscoverTunersSecurity;
}


export class DiscoverTunersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TunerHostInfo })
  tunerHostInfos?: shared.TunerHostInfo[];
}
