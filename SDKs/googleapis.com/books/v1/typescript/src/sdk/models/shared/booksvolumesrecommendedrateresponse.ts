import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BooksVolumesRecommendedRateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consistency_token" })
  consistencyToken?: string;
}
