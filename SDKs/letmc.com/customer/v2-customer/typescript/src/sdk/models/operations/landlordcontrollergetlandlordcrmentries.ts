import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LandlordControllerGetLandlordCrmEntriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class LandlordControllerGetLandlordCrmEntriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class LandlordControllerGetLandlordCrmEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LandlordControllerGetLandlordCrmEntriesPathParams;

  @SpeakeasyMetadata()
  queryParams: LandlordControllerGetLandlordCrmEntriesQueryParams;
}


export class LandlordControllerGetLandlordCrmEntriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LandlordCrmEntry })
  landlordCrmEntries?: shared.LandlordCrmEntry[];

  @SpeakeasyMetadata()
  statusCode: number;
}
