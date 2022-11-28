import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExtrasReportsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
