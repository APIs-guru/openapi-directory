import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscoverTunersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newDevicesOnly" })
  newDevicesOnly?: boolean;
}


export class DiscoverTunersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DiscoverTunersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DiscoverTunersQueryParams;

  @SpeakeasyMetadata()
  security: DiscoverTunersSecurity;
}


export class DiscoverTunersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TunerHostInfo })
  tunerHostInfos?: shared.TunerHostInfo[];
}
