import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tileJson?: shared.TileJson;
}
