import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPartResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ErskineMayPart })
  erskineMayParts?: shared.ErskineMayPart[];

  @Metadata()
  statusCode: number;
}
