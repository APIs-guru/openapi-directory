import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Page } from "./page";
import { DocumentationRule } from "./documentationrule";



// Documentation
/** 
 * `Documentation` provides the information for describing a service. Example: documentation: summary: > The Google Calendar API gives access to most calendar features. pages: - name: Overview content: (== include google/foo/overview.md ==) - name: Tutorial content: (== include google/foo/tutorial.md ==) subpages; - name: Java content: (== include google/foo/tutorial_java.md ==) rules: - selector: google.calendar.Calendar.Get description: > ... - selector: google.calendar.Calendar.Put description: > ... Documentation is provided in markdown syntax. In addition to standard markdown features, definition lists, tables and fenced code blocks are supported. Section headers can be provided and are interpreted relative to the section nesting of the context where a documentation fragment is embedded. Documentation from the IDL is merged with documentation defined via the config at normalization time, where documentation provided by config rules overrides IDL provided. A number of constructs specific to the API platform are supported in documentation text. In order to reference a proto element, the following notation can be used: [fully.qualified.proto.name][] To override the display text used for the link, this can be used: [display text][fully.qualified.proto.name] Text can be excluded from doc using the following notation: (-- internal comment --) A few directives are available in documentation. Note that directives must appear on a single line to be properly identified. The `include` directive includes a markdown file from an external source: (== include path/to/file ==) The `resource_for` directive marks a message to be the resource of a collection in REST view. If it is not specified, tools attempt to infer the resource from the operations in a collection: (== resource_for v1.shelves.books ==) The directive `suppress_warning` does not directly affect documentation and is documented together with service config validation.
**/
export class Documentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentationRootUrl" })
  documentationRootUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=pages", elemType: Page })
  pages?: Page[];

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: DocumentationRule })
  rules?: DocumentationRule[];

  @SpeakeasyMetadata({ data: "json, name=serviceRootUrl" })
  serviceRootUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: string;
}
