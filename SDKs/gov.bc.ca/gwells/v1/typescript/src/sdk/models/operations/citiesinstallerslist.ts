import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CitiesInstallersListResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.CityList })
  cityLists?: shared.CityList[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
