import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShortlinkResponseEtatEtat extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=shortlink" })
  shortlink?: string;
}


export class ShortlinkResponseEtat extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat", elemType: shared.ShortlinkResponseEtatEtat })
  etat?: ShortlinkResponseEtatEtat[];
}


export class ShortlinkResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etat" })
  etat?: ShortlinkResponseEtat;
}
