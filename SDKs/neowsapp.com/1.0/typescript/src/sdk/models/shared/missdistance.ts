import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MissDistance extends SpeakeasyBase {
  @Metadata({ data: "json, name=astronomical" })
  astronomical?: string;

  @Metadata({ data: "json, name=kilometers" })
  kilometers?: string;

  @Metadata({ data: "json, name=lunar" })
  lunar?: string;

  @Metadata({ data: "json, name=miles" })
  miles?: string;
}
