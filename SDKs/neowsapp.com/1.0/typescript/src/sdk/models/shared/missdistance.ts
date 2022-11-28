import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MissDistance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=astronomical" })
  astronomical?: string;

  @SpeakeasyMetadata({ data: "json, name=kilometers" })
  kilometers?: string;

  @SpeakeasyMetadata({ data: "json, name=lunar" })
  lunar?: string;

  @SpeakeasyMetadata({ data: "json, name=miles" })
  miles?: string;
}
