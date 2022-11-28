import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubmissionsOptionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
