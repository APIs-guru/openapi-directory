import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CriticMultimediaResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=credit" })
  credit?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=src" })
  src?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class CriticMultimedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource?: CriticMultimediaResource;
}


export class Critic extends SpeakeasyBase {
  @Metadata({ data: "json, name=bio" })
  bio?: string;

  @Metadata({ data: "json, name=display_name" })
  displayName?: string;

  @Metadata({ data: "json, name=multimedia" })
  multimedia?: CriticMultimedia;

  @Metadata({ data: "json, name=seo_name" })
  seoName?: string;

  @Metadata({ data: "json, name=sort_name" })
  sortName?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
