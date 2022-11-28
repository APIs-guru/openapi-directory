import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTherapeuticAreasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
