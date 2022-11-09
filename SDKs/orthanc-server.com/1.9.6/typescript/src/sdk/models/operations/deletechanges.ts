import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
