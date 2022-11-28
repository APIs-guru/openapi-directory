import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DiscvoverTunersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=newDevicesOnly" })
  newDevicesOnly?: boolean;
}


export class DiscvoverTunersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class DiscvoverTunersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DiscvoverTunersQueryParams;

  @SpeakeasyMetadata()
  security: DiscvoverTunersSecurity;
}


export class DiscvoverTunersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TunerHostInfo })
  tunerHostInfos?: shared.TunerHostInfo[];
}
