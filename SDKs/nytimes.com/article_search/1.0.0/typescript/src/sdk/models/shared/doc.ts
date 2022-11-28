import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DocByline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: string;

  @SpeakeasyMetadata({ data: "json, name=original" })
  original?: string;

  @SpeakeasyMetadata({ data: "json, name=person" })
  person?: any[];
}


export class DocHeadline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kicker" })
  kicker?: string;

  @SpeakeasyMetadata({ data: "json, name=main" })
  main?: string;
}


export class DocKeywords extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rank" })
  rank?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class DocMultimedia extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=copyright" })
  copyright?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=subtype" })
  subtype?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}


export class Doc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=abstract" })
  abstract?: string;

  @SpeakeasyMetadata({ data: "json, name=blog" })
  blog?: any[];

  @SpeakeasyMetadata({ data: "json, name=byline" })
  byline?: DocByline;

  @SpeakeasyMetadata({ data: "json, name=document_type" })
  documentType?: string;

  @SpeakeasyMetadata({ data: "json, name=headline" })
  headline?: DocHeadline;

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: DocKeywords;

  @SpeakeasyMetadata({ data: "json, name=lead_paragraph" })
  leadParagraph?: string;

  @SpeakeasyMetadata({ data: "json, name=multimedia", elemType: DocMultimedia })
  multimedia?: DocMultimedia[];

  @SpeakeasyMetadata({ data: "json, name=news_desk" })
  newsDesk?: string;

  @SpeakeasyMetadata({ data: "json, name=print_page" })
  printPage?: string;

  @SpeakeasyMetadata({ data: "json, name=pub_date" })
  pubDate?: string;

  @SpeakeasyMetadata({ data: "json, name=section_name" })
  sectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=slideshow_credits" })
  slideshowCredits?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=subsection_name" })
  subsectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=type_of_material" })
  typeOfMaterial?: string;

  @SpeakeasyMetadata({ data: "json, name=web_url" })
  webUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=word_count" })
  wordCount?: string;
}
