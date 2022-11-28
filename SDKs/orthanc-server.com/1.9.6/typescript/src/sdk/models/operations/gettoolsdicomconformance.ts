import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetToolsDicomConformanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
