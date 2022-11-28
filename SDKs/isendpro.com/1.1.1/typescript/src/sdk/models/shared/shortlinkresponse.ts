import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShortlinkResponseEtatEtat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=shortlink" })
  shortlink?: string;
}


export class ShortlinkResponseEtat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat", elemType: ShortlinkResponseEtatEtat })
  etat?: ShortlinkResponseEtatEtat[];
}


export class ShortlinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etat" })
  etat?: ShortlinkResponseEtat;
}
