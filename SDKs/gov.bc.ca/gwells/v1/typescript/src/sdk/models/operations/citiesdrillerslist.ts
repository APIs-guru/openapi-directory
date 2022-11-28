import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CitiesDrillersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.CityList })
  cityLists?: shared.CityList[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
