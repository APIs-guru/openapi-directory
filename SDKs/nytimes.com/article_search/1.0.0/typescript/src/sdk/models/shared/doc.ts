import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DocByline extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: string;

  @Metadata({ data: "json, name=original" })
  original?: string;

  @Metadata({ data: "json, name=person" })
  person?: any[];
}


export class DocHeadline extends SpeakeasyBase {
  @Metadata({ data: "json, name=kicker" })
  kicker?: string;

  @Metadata({ data: "json, name=main" })
  main?: string;
}


export class DocKeywords extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rank" })
  rank?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class DocMultimedia extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=copyright" })
  copyright?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=subtype" })
  subtype?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=width" })
  width?: number;
}


export class Doc extends SpeakeasyBase {
  @Metadata({ data: "json, name=_id" })
  id?: string;

  @Metadata({ data: "json, name=abstract" })
  abstract?: string;

  @Metadata({ data: "json, name=blog" })
  blog?: any[];

  @Metadata({ data: "json, name=byline" })
  byline?: DocByline;

  @Metadata({ data: "json, name=document_type" })
  documentType?: string;

  @Metadata({ data: "json, name=headline" })
  headline?: DocHeadline;

  @Metadata({ data: "json, name=keywords" })
  keywords?: DocKeywords;

  @Metadata({ data: "json, name=lead_paragraph" })
  leadParagraph?: string;

  @Metadata({ data: "json, name=multimedia", elemType: shared.DocMultimedia })
  multimedia?: DocMultimedia[];

  @Metadata({ data: "json, name=news_desk" })
  newsDesk?: string;

  @Metadata({ data: "json, name=print_page" })
  printPage?: string;

  @Metadata({ data: "json, name=pub_date" })
  pubDate?: string;

  @Metadata({ data: "json, name=section_name" })
  sectionName?: string;

  @Metadata({ data: "json, name=slideshow_credits" })
  slideshowCredits?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=subsection_name" })
  subsectionName?: string;

  @Metadata({ data: "json, name=type_of_material" })
  typeOfMaterial?: string;

  @Metadata({ data: "json, name=web_url" })
  webUrl?: string;

  @Metadata({ data: "json, name=word_count" })
  wordCount?: string;
}
