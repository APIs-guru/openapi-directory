import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TenancyChoicesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
