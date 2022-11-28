# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DocsDocumentsBatchUpdateRequest{
        Security: operations.DocsDocumentsBatchUpdateSecurity{
            Option1: &operations.DocsDocumentsBatchUpdateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.DocsDocumentsBatchUpdatePathParams{
            DocumentID: "minima",
        },
        QueryParams: operations.DocsDocumentsBatchUpdateQueryParams{
            DollarXgafv: "2",
            AccessToken: "in",
            Alt: "proto",
            Callback: "excepturi",
            Fields: "dolorum",
            Key: "non",
            OauthToken: "sit",
            PrettyPrint: true,
            QuotaUser: "id",
            UploadType: "a",
            UploadProtocol: "est",
        },
        Request: &shared.BatchUpdateDocumentRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 5366698653179862498,
                            SegmentID: "sunt",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "adipisci",
                        },
                        Location: &shared.Location{
                            Index: 7583338598271660861,
                            SegmentID: "porro",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 4232705511295606748,
                            SegmentID: "rem",
                        },
                        Type: "HEADER_FOOTER_TYPE_UNSPECIFIED",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "amet",
                        Range: &shared.Range{
                            EndIndex: 6667775191372553350,
                            SegmentID: "sed",
                            StartIndex: 6506546517535170019,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "NUMBERED_UPPERALPHA_ALPHA_ROMAN",
                        Range: &shared.Range{
                            EndIndex: 5559771435623645996,
                            SegmentID: "magnam",
                            StartIndex: 377216058500660564,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 4370872538591255524,
                            SegmentID: "animi",
                            StartIndex: 7783867136465378367,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "error",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "expedita",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "hic",
                        NamedRangeID: "sint",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 3178249105209184734,
                            SegmentID: "cum",
                            StartIndex: 2513013135709289138,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "est",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1901875206942845850,
                            RowIndex: 5530559030884502915,
                            TableStartLocation: &shared.Location{
                                Index: 6009880212366740645,
                                SegmentID: "nisi",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 4959327573254930506,
                            RowIndex: 609779180228919533,
                            TableStartLocation: &shared.Location{
                                Index: 1842414433445382149,
                                SegmentID: "voluptas",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "vel",
                        },
                        Location: &shared.Location{
                            Index: 6300255120863348113,
                            SegmentID: "quia",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 28.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 35.099998,
                                Unit: "PT",
                            },
                        },
                        URI: "aut",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "distinctio",
                        },
                        Location: &shared.Location{
                            Index: 802263760626499579,
                            SegmentID: "pariatur",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "et",
                        },
                        Location: &shared.Location{
                            Index: 5471193514497261027,
                            SegmentID: "est",
                        },
                        SectionType: "SECTION_TYPE_UNSPECIFIED",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 624301117795162001,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "omnis",
                        },
                        Location: &shared.Location{
                            Index: 4312706972528545348,
                            SegmentID: "explicabo",
                        },
                        Rows: 4772767214414571830,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: true,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8660987552161394608,
                            RowIndex: 5451374651406247552,
                            TableStartLocation: &shared.Location{
                                Index: 6782756290226685504,
                                SegmentID: "beatae",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 1247309286835258792,
                            RowIndex: 5838081969234381789,
                            TableStartLocation: &shared.Location{
                                Index: 2003445621514778654,
                                SegmentID: "alias",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "a",
                        },
                        Location: &shared.Location{
                            Index: 6254078625334690390,
                            SegmentID: "tenetur",
                        },
                        Text: "facilis",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 4427043544170120765,
                            RowSpan: 311785848772082444,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 8750974328945448234,
                                RowIndex: 7097710149691441517,
                                TableStartLocation: &shared.Location{
                                    Index: 1652101197329302254,
                                    SegmentID: "voluptatem",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 9138005301096420624,
                        TableStartLocation: &shared.Location{
                            Index: 6973057818752311221,
                            SegmentID: "aut",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "qui",
                        },
                        ReplaceText: "quod",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "esse",
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        URI: "officiis",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "qui",
                        NamedRangeName: "ipsa",
                        Text: "tenetur",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 191219428670541487,
                            RowSpan: 2214606034727780076,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 517354150590835448,
                                RowIndex: 8251223882671096119,
                                TableStartLocation: &shared.Location{
                                    Index: 4209825760362988062,
                                    SegmentID: "culpa",
                                },
                            },
                        },
                    },
                    UpdateDocumentStyle: &shared.UpdateDocumentStyleRequest{
                        DocumentStyle: &shared.DocumentStyle{
                            Background: &shared.Background{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 48.200001,
                                            Green: 46.099998,
                                            Red: 51.200001,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "illum",
                            DefaultHeaderID: "voluptas",
                            EvenPageFooterID: "ea",
                            EvenPageHeaderID: "velit",
                            FirstPageFooterID: "placeat",
                            FirstPageHeaderID: "amet",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 70.199997,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 21.200001,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 36.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 15.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 60.200001,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 62.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 6832840915743680141,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 81.199997,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 48.099998,
                                    Unit: "PT",
                                },
                            },
                            UseCustomHeaderFooterMargins: true,
                            UseEvenPageHeaderFooter: true,
                            UseFirstPageHeaderFooter: false,
                        },
                        Fields: "et",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "magnam",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "CENTER",
                            AvoidWidowAndOrphan: true,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 23.200001,
                                            Green: 86.199997,
                                            Red: 26.200001,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 76.199997,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 18.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 5.200000,
                                            Green: 37.099998,
                                            Red: 87.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 47.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 61.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 38.099998,
                                            Green: 78.199997,
                                            Red: 21.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 76.199997,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 58.200001,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 89.099998,
                                            Green: 85.199997,
                                            Red: 31.100000,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Padding: &shared.Dimension{
                                    Magnitude: 63.200001,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 44.099998,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 99.099998,
                                            Green: 37.200001,
                                            Red: 73.099998,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 19.100000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 80.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Direction: "CONTENT_DIRECTION_UNSPECIFIED",
                            HeadingID: "aliquam",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 46.200001,
                                Unit: "PT",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 16.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 42.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            KeepLinesTogether: true,
                            KeepWithNext: false,
                            LineSpacing: 52.200001,
                            NamedStyleType: "HEADING_6",
                            PageBreakBefore: true,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 72.099998,
                                            Green: 30.100000,
                                            Red: 39.099998,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 31.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 17.200001,
                                Unit: "PT",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 28.100000,
                                        Unit: "PT",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 95.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 2873915963918454826,
                            SegmentID: "itaque",
                            StartIndex: 1126029384112494313,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "eligendi",
                        Range: &shared.Range{
                            EndIndex: 4345874154812671182,
                            SegmentID: "atque",
                            StartIndex: 4943755619326850455,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 27.200001,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 26.100000,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 57.200001,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 14.100000,
                                        Unit: "PT",
                                    },
                                },
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 93.099998,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 87.199997,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "NONE",
                            ContentDirection: "LEFT_TO_RIGHT",
                            DefaultFooterID: "omnis",
                            DefaultHeaderID: "voluptas",
                            EvenPageFooterID: "sunt",
                            EvenPageHeaderID: "ut",
                            FirstPageFooterID: "consectetur",
                            FirstPageHeaderID: "qui",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 38.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 14.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 9.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 93.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 71.199997,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 97.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 4671292837807335396,
                            SectionType: "CONTINUOUS",
                            UseFirstPageHeaderFooter: true,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "provident",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 7.100000,
                                        Green: 76.199997,
                                        Red: 80.199997,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 48.099998,
                                            Green: 1.100000,
                                            Red: 24.100000,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 6.100000,
                                    Unit: "PT",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 95.199997,
                                            Green: 47.200001,
                                            Red: 27.200001,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Width: &shared.Dimension{
                                    Magnitude: 68.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 30.200001,
                                            Green: 52.099998,
                                            Red: 74.199997,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 17.100000,
                                    Unit: "PT",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 24.200001,
                                            Green: 90.199997,
                                            Red: 75.199997,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 58.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            ColumnSpan: 4955772478497671581,
                            ContentAlignment: "TOP",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 48.099998,
                                Unit: "PT",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 0.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 38.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 65.199997,
                                Unit: "PT",
                            },
                            RowSpan: 7160855961889789812,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 4762725760957286570,
                            RowSpan: 6367887922305571310,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 3035830111497231017,
                                RowIndex: 1423209342964650157,
                                TableStartLocation: &shared.Location{
                                    Index: 4012439676724472844,
                                    SegmentID: "magnam",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 7618360292500041981,
                            SegmentID: "et",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            7787468353835954852,
                            3945221723135841929,
                            4742823144534339940,
                        },
                        Fields: "pariatur",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 61.200001,
                                Unit: "PT",
                            },
                            WidthType: "WIDTH_TYPE_UNSPECIFIED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 5523128127863971800,
                            SegmentID: "est",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "harum",
                        RowIndices: []int32{
                            1502963936379473833,
                            134844738053259294,
                            9030328761985061160,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 84.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PreventOverflow: true,
                            TableHeader: true,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 889279753299200637,
                            SegmentID: "perferendis",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "illum",
                        Range: &shared.Range{
                            EndIndex: 6629036385207991534,
                            SegmentID: "dicta",
                            StartIndex: 7979012997571479199,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 64.099998,
                                        Green: 45.200001,
                                        Red: 18.100000,
                                    },
                                },
                            },
                            BaselineOffset: "SUPERSCRIPT",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 42.200001,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 90.199997,
                                        Green: 91.099998,
                                        Red: 84.199997,
                                    },
                                },
                            },
                            Italic: true,
                            Link: &shared.Link{
                                BookmarkID: "assumenda",
                                HeadingID: "iste",
                                URL: "laudantium",
                            },
                            SmallCaps: true,
                            Strikethrough: true,
                            Underline: true,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "molestias",
                                Weight: 7274761927021551690,
                            },
                        },
                    },
                },
                shared.Request{
                    CreateFooter: &shared.CreateFooterRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 7178669309508925381,
                            SegmentID: "impedit",
                        },
                        Type: "DEFAULT",
                    },
                    CreateFootnote: &shared.CreateFootnoteRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "dignissimos",
                        },
                        Location: &shared.Location{
                            Index: 7018479074248259268,
                            SegmentID: "eius",
                        },
                    },
                    CreateHeader: &shared.CreateHeaderRequest{
                        SectionBreakLocation: &shared.Location{
                            Index: 8621633525973547473,
                            SegmentID: "architecto",
                        },
                        Type: "DEFAULT",
                    },
                    CreateNamedRange: &shared.CreateNamedRangeRequest{
                        Name: "ipsa",
                        Range: &shared.Range{
                            EndIndex: 8580294551923686185,
                            SegmentID: "quam",
                            StartIndex: 2478420940284521905,
                        },
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_DISC_CIRCLE_SQUARE",
                        Range: &shared.Range{
                            EndIndex: 203536771159495225,
                            SegmentID: "hic",
                            StartIndex: 1067629835772252789,
                        },
                    },
                    DeleteContentRange: &shared.DeleteContentRangeRequest{
                        Range: &shared.Range{
                            EndIndex: 7621345094498405750,
                            SegmentID: "doloremque",
                            StartIndex: 1526382685998954242,
                        },
                    },
                    DeleteFooter: &shared.DeleteFooterRequest{
                        FooterID: "dicta",
                    },
                    DeleteHeader: &shared.DeleteHeaderRequest{
                        HeaderID: "distinctio",
                    },
                    DeleteNamedRange: &shared.DeleteNamedRangeRequest{
                        Name: "voluptas",
                        NamedRangeID: "consequatur",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        Range: &shared.Range{
                            EndIndex: 779155058292860207,
                            SegmentID: "quis",
                            StartIndex: 7293997328744385729,
                        },
                    },
                    DeletePositionedObject: &shared.DeletePositionedObjectRequest{
                        ObjectID: "blanditiis",
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 6240154433186329948,
                            RowIndex: 6522265241252266577,
                            TableStartLocation: &shared.Location{
                                Index: 187607562694229957,
                                SegmentID: "ea",
                            },
                        },
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 519134575483600036,
                            RowIndex: 8220151845507174577,
                            TableStartLocation: &shared.Location{
                                Index: 3521068655591366383,
                                SegmentID: "non",
                            },
                        },
                    },
                    InsertInlineImage: &shared.InsertInlineImageRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "suscipit",
                        },
                        Location: &shared.Location{
                            Index: 3872753664488019673,
                            SegmentID: "perferendis",
                        },
                        ObjectSize: &shared.Size{
                            Height: &shared.Dimension{
                                Magnitude: 43.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            Width: &shared.Dimension{
                                Magnitude: 69.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        URI: "ea",
                    },
                    InsertPageBreak: &shared.InsertPageBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "dolor",
                        },
                        Location: &shared.Location{
                            Index: 1104488391383121874,
                            SegmentID: "quos",
                        },
                    },
                    InsertSectionBreak: &shared.InsertSectionBreakRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "et",
                        },
                        Location: &shared.Location{
                            Index: 8951272542505405032,
                            SegmentID: "sint",
                        },
                        SectionType: "NEXT_PAGE",
                    },
                    InsertTable: &shared.InsertTableRequest{
                        Columns: 7531458311308445458,
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "aspernatur",
                        },
                        Location: &shared.Location{
                            Index: 9172996914882314315,
                            SegmentID: "est",
                        },
                        Rows: 932595969914355014,
                    },
                    InsertTableColumn: &shared.InsertTableColumnRequest{
                        InsertRight: false,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 127146344023191494,
                            RowIndex: 5763449539912460701,
                            TableStartLocation: &shared.Location{
                                Index: 7538057318331151067,
                                SegmentID: "cumque",
                            },
                        },
                    },
                    InsertTableRow: &shared.InsertTableRowRequest{
                        InsertBelow: true,
                        TableCellLocation: &shared.TableCellLocation{
                            ColumnIndex: 213629325496444736,
                            RowIndex: 6461026551412750880,
                            TableStartLocation: &shared.Location{
                                Index: 9191502731704075550,
                                SegmentID: "ea",
                            },
                        },
                    },
                    InsertText: &shared.InsertTextRequest{
                        EndOfSegmentLocation: &shared.EndOfSegmentLocation{
                            SegmentID: "aspernatur",
                        },
                        Location: &shared.Location{
                            Index: 2754115983590563890,
                            SegmentID: "delectus",
                        },
                        Text: "iusto",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 1045160389383604330,
                            RowSpan: 8528584490938715896,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 6150985785604264840,
                                RowIndex: 201136682368623758,
                                TableStartLocation: &shared.Location{
                                    Index: 633266026673810668,
                                    SegmentID: "nihil",
                                },
                            },
                        },
                    },
                    PinTableHeaderRows: &shared.PinTableHeaderRowsRequest{
                        PinnedHeaderRowsCount: 5018370869501883230,
                        TableStartLocation: &shared.Location{
                            Index: 2133319266033746062,
                            SegmentID: "officiis",
                        },
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "id",
                        },
                        ReplaceText: "tenetur",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "temporibus",
                        ImageReplaceMethod: "CENTER_CROP",
                        URI: "nulla",
                    },
                    ReplaceNamedRangeContent: &shared.ReplaceNamedRangeContentRequest{
                        NamedRangeID: "qui",
                        NamedRangeName: "exercitationem",
                        Text: "rem",
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        TableRange: &shared.TableRange{
                            ColumnSpan: 5066569508154359996,
                            RowSpan: 3631397369161988323,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 4253846045314559261,
                                RowIndex: 5854935166641558569,
                                TableStartLocation: &shared.Location{
                                    Index: 2974511814070703559,
                                    SegmentID: "deserunt",
                                },
                            },
                        },
                    },
                    UpdateDocumentStyle: &shared.UpdateDocumentStyleRequest{
                        DocumentStyle: &shared.DocumentStyle{
                            Background: &shared.Background{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 55.099998,
                                            Green: 72.099998,
                                            Red: 75.099998,
                                        },
                                    },
                                },
                            },
                            DefaultFooterID: "fuga",
                            DefaultHeaderID: "recusandae",
                            EvenPageFooterID: "sed",
                            EvenPageHeaderID: "placeat",
                            FirstPageFooterID: "et",
                            FirstPageHeaderID: "fuga",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 42.200001,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 81.199997,
                                Unit: "PT",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 58.099998,
                                Unit: "PT",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 27.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 69.099998,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 17.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PageNumberStart: 4708476304598192687,
                            PageSize: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 3.100000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 17.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            UseCustomHeaderFooterMargins: true,
                            UseEvenPageHeaderFooter: false,
                            UseFirstPageHeaderFooter: true,
                        },
                        Fields: "illo",
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        Fields: "ut",
                        ParagraphStyle: &shared.ParagraphStyle{
                            Alignment: "ALIGNMENT_UNSPECIFIED",
                            AvoidWidowAndOrphan: false,
                            BorderBetween: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 73.099998,
                                            Green: 50.099998,
                                            Red: 37.099998,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 65.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 75.199997,
                                    Unit: "PT",
                                },
                            },
                            BorderBottom: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 69.199997,
                                            Green: 14.100000,
                                            Red: 61.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 49.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 40.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 93.099998,
                                            Green: 58.200001,
                                            Red: 51.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Padding: &shared.Dimension{
                                    Magnitude: 26.200001,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 2.100000,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 75.099998,
                                            Green: 81.199997,
                                            Red: 67.099998,
                                        },
                                    },
                                },
                                DashStyle: "SOLID",
                                Padding: &shared.Dimension{
                                    Magnitude: 35.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 49.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.ParagraphBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 85.099998,
                                            Green: 31.200001,
                                            Red: 28.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Padding: &shared.Dimension{
                                    Magnitude: 62.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 19.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Direction: "LEFT_TO_RIGHT",
                            HeadingID: "aut",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 47.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 44.099998,
                                Unit: "PT",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 72.199997,
                                Unit: "PT",
                            },
                            KeepLinesTogether: true,
                            KeepWithNext: true,
                            LineSpacing: 9.100000,
                            NamedStyleType: "HEADING_3",
                            PageBreakBefore: false,
                            Shading: &shared.Shading{
                                BackgroundColor: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 20.200001,
                                            Green: 30.100000,
                                            Red: 86.099998,
                                        },
                                    },
                                },
                            },
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 61.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 45.099998,
                                Unit: "PT",
                            },
                            SpacingMode: "SPACING_MODE_UNSPECIFIED",
                            TabStops: []shared.TabStop{
                                shared.TabStop{
                                    Alignment: "CENTER",
                                    Offset: &shared.Dimension{
                                        Magnitude: 93.199997,
                                        Unit: "PT",
                                    },
                                },
                                shared.TabStop{
                                    Alignment: "END",
                                    Offset: &shared.Dimension{
                                        Magnitude: 33.200001,
                                        Unit: "UNIT_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                        Range: &shared.Range{
                            EndIndex: 6066651900514610334,
                            SegmentID: "quos",
                            StartIndex: 5538397250943388895,
                        },
                    },
                    UpdateSectionStyle: &shared.UpdateSectionStyleRequest{
                        Fields: "ex",
                        Range: &shared.Range{
                            EndIndex: 4345622572618472669,
                            SegmentID: "quia",
                            StartIndex: 7369310067358759469,
                        },
                        SectionStyle: &shared.SectionStyle{
                            ColumnProperties: []shared.SectionColumnProperties{
                                shared.SectionColumnProperties{
                                    PaddingEnd: &shared.Dimension{
                                        Magnitude: 26.100000,
                                        Unit: "PT",
                                    },
                                    Width: &shared.Dimension{
                                        Magnitude: 20.200001,
                                        Unit: "PT",
                                    },
                                },
                            },
                            ColumnSeparatorStyle: "BETWEEN_EACH_COLUMN",
                            ContentDirection: "RIGHT_TO_LEFT",
                            DefaultFooterID: "neque",
                            DefaultHeaderID: "rerum",
                            EvenPageFooterID: "reiciendis",
                            EvenPageHeaderID: "quos",
                            FirstPageFooterID: "minima",
                            FirstPageHeaderID: "praesentium",
                            MarginBottom: &shared.Dimension{
                                Magnitude: 84.199997,
                                Unit: "PT",
                            },
                            MarginFooter: &shared.Dimension{
                                Magnitude: 20.100000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginHeader: &shared.Dimension{
                                Magnitude: 34.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginLeft: &shared.Dimension{
                                Magnitude: 69.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            MarginRight: &shared.Dimension{
                                Magnitude: 31.100000,
                                Unit: "PT",
                            },
                            MarginTop: &shared.Dimension{
                                Magnitude: 47.200001,
                                Unit: "PT",
                            },
                            PageNumberStart: 5126858849142592423,
                            SectionType: "CONTINUOUS",
                            UseFirstPageHeaderFooter: true,
                        },
                    },
                    UpdateTableCellStyle: &shared.UpdateTableCellStyleRequest{
                        Fields: "et",
                        TableCellStyle: &shared.TableCellStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 28.100000,
                                        Green: 60.099998,
                                        Red: 33.200001,
                                    },
                                },
                            },
                            BorderBottom: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 94.199997,
                                            Green: 60.099998,
                                            Red: 91.199997,
                                        },
                                    },
                                },
                                DashStyle: "DOT",
                                Width: &shared.Dimension{
                                    Magnitude: 47.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderLeft: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 54.099998,
                                            Green: 4.200000,
                                            Red: 65.199997,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 20.100000,
                                    Unit: "PT",
                                },
                            },
                            BorderRight: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 3.200000,
                                            Green: 70.099998,
                                            Red: 63.200001,
                                        },
                                    },
                                },
                                DashStyle: "DASH_STYLE_UNSPECIFIED",
                                Width: &shared.Dimension{
                                    Magnitude: 3.100000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            BorderTop: &shared.TableCellBorder{
                                Color: &shared.OptionalColor{
                                    Color: &shared.Color{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 45.099998,
                                            Green: 19.100000,
                                            Red: 33.099998,
                                        },
                                    },
                                },
                                DashStyle: "DASH",
                                Width: &shared.Dimension{
                                    Magnitude: 54.200001,
                                    Unit: "PT",
                                },
                            },
                            ColumnSpan: 219499341641324294,
                            ContentAlignment: "MIDDLE",
                            PaddingBottom: &shared.Dimension{
                                Magnitude: 65.099998,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            PaddingLeft: &shared.Dimension{
                                Magnitude: 91.199997,
                                Unit: "PT",
                            },
                            PaddingRight: &shared.Dimension{
                                Magnitude: 84.199997,
                                Unit: "PT",
                            },
                            PaddingTop: &shared.Dimension{
                                Magnitude: 13.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            RowSpan: 6189909207947001558,
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 1718360398048267082,
                            RowSpan: 9182776419247387771,
                            TableCellLocation: &shared.TableCellLocation{
                                ColumnIndex: 8037686656878640300,
                                RowIndex: 2934755774424534288,
                                TableStartLocation: &shared.Location{
                                    Index: 8326600461687117106,
                                    SegmentID: "ipsam",
                                },
                            },
                        },
                        TableStartLocation: &shared.Location{
                            Index: 4359082301878081056,
                            SegmentID: "et",
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            1852088458822905920,
                            7586438891944009421,
                        },
                        Fields: "soluta",
                        TableColumnProperties: &shared.TableColumnProperties{
                            Width: &shared.Dimension{
                                Magnitude: 0.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            WidthType: "EVENLY_DISTRIBUTED",
                        },
                        TableStartLocation: &shared.Location{
                            Index: 427966507688336275,
                            SegmentID: "dignissimos",
                        },
                    },
                    UpdateTableRowStyle: &shared.UpdateTableRowStyleRequest{
                        Fields: "doloribus",
                        RowIndices: []int32{
                            962394742933999841,
                            5084251026971243878,
                        },
                        TableRowStyle: &shared.TableRowStyle{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 36.099998,
                                Unit: "PT",
                            },
                            PreventOverflow: false,
                            TableHeader: false,
                        },
                        TableStartLocation: &shared.Location{
                            Index: 6879210025953136831,
                            SegmentID: "sint",
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        Fields: "voluptatum",
                        Range: &shared.Range{
                            EndIndex: 6237824671297816864,
                            SegmentID: "enim",
                            StartIndex: 2572294861847626480,
                        },
                        TextStyle: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 76.099998,
                                        Green: 0.100000,
                                        Red: 66.099998,
                                    },
                                },
                            },
                            BaselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
                            Bold: false,
                            FontSize: &shared.Dimension{
                                Magnitude: 84.199997,
                                Unit: "PT",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                Color: &shared.Color{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 91.099998,
                                        Green: 82.199997,
                                        Red: 61.099998,
                                    },
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                BookmarkID: "quia",
                                HeadingID: "corrupti",
                                URL: "sunt",
                            },
                            SmallCaps: false,
                            Strikethrough: false,
                            Underline: true,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "quos",
                                Weight: 1570222526780299863,
                            },
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "explicabo",
                TargetRevisionID: "est",
            },
        },
    }
    
    res, err := s.Documents.DocsDocumentsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateDocumentResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### documents

* `DocsDocumentsBatchUpdate` - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `DocsDocumentsCreate` - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
* `DocsDocumentsGet` - Gets the latest version of the specified document.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
