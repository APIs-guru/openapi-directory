import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BooksVolumesRecommendedRateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consistency_token" })
  consistencyToken?: string;
}
