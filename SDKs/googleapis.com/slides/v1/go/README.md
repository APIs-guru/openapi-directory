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
    
    req := operations.SlidesPresentationsBatchUpdateRequest{
        Security: operations.SlidesPresentationsBatchUpdateSecurity{
            Option1: &operations.SlidesPresentationsBatchUpdateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.SlidesPresentationsBatchUpdatePathParams{
            PresentationID: "labore",
        },
        QueryParams: operations.SlidesPresentationsBatchUpdateQueryParams{
            DollarXgafv: "1",
            AccessToken: "a",
            Alt: "proto",
            Callback: "ipsa",
            Fields: "enim",
            Key: "magni",
            OauthToken: "sequi",
            PrettyPrint: true,
            QuotaUser: "omnis",
            UploadType: "adipisci",
            UploadProtocol: "at",
        },
        Request: &shared.BatchUpdatePresentationRequest{
            Requests: []shared.Request{
                shared.Request{
                    CreateImage: &shared.CreateImageRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "suscipit",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 72.099998,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 38.200001,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 83.199997,
                                ScaleY: 45.099998,
                                ShearX: 65.099998,
                                ShearY: 66.099998,
                                TranslateX: 10.100000,
                                TranslateY: 38.200001,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "aut",
                        URL: "quod",
                    },
                    CreateLine: &shared.CreateLineRequest{
                        Category: "CURVED",
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "commodi",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 30.100000,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 8.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 98.099998,
                                ScaleY: 63.099998,
                                ShearX: 13.100000,
                                ShearY: 30.100000,
                                TranslateX: 32.200001,
                                TranslateY: 46.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        LineCategory: "BENT",
                        ObjectID: "veniam",
                    },
                    CreateParagraphBullets: &shared.CreateParagraphBulletsRequest{
                        BulletPreset: "BULLET_DIAMONDX_ARROW3D_SQUARE",
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 3736691920150480751,
                            RowIndex: 256816899672954969,
                        },
                        ObjectID: "sequi",
                        TextRange: &shared.Range{
                            EndIndex: 4731195890828409434,
                            StartIndex: 5530545631762220145,
                            Type: "ALL",
                        },
                    },
                    CreateShape: &shared.CreateShapeRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "est",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 6.200000,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 56.099998,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 13.200000,
                                ScaleY: 79.099998,
                                ShearX: 85.099998,
                                ShearY: 81.199997,
                                TranslateX: 6.200000,
                                TranslateY: 18.100000,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "distinctio",
                        ShapeType: "MATH_MINUS",
                    },
                    CreateSheetsChart: &shared.CreateSheetsChartRequest{
                        ChartID: 4091678161853246892,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "fuga",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 42.200001,
                                    Unit: "EMU",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 88.199997,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 25.200001,
                                ScaleY: 74.199997,
                                ShearX: 29.200001,
                                ShearY: 46.099998,
                                TranslateX: 94.199997,
                                TranslateY: 32.200001,
                                Unit: "EMU",
                            },
                        },
                        LinkingMode: "LINKED",
                        ObjectID: "maxime",
                        SpreadsheetID: "in",
                    },
                    CreateSlide: &shared.CreateSlideRequest{
                        InsertionIndex: 7933490707002905300,
                        ObjectID: "accusantium",
                        PlaceholderIDMappings: []shared.LayoutPlaceholderIDMapping{
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 5698348303297314090,
                                    ParentObjectID: "voluptates",
                                    Type: "TITLE",
                                },
                                LayoutPlaceholderObjectID: "natus",
                                ObjectID: "perspiciatis",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 9145339099388304453,
                                    ParentObjectID: "in",
                                    Type: "CENTERED_TITLE",
                                },
                                LayoutPlaceholderObjectID: "sed",
                                ObjectID: "magnam",
                            },
                            shared.LayoutPlaceholderIDMapping{
                                LayoutPlaceholder: &shared.Placeholder{
                                    Index: 2670941312767507050,
                                    ParentObjectID: "praesentium",
                                    Type: "DATE_AND_TIME",
                                },
                                LayoutPlaceholderObjectID: "nesciunt",
                                ObjectID: "tempore",
                            },
                        },
                        SlideLayoutReference: &shared.LayoutReference{
                            LayoutID: "corporis",
                            PredefinedLayout: "TITLE_ONLY",
                        },
                    },
                    CreateTable: &shared.CreateTableRequest{
                        Columns: 7446839717505081825,
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "est",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 76.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 19.100000,
                                    Unit: "PT",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 28.200001,
                                ScaleY: 14.100000,
                                ShearX: 53.200001,
                                ShearY: 48.099998,
                                TranslateX: 16.100000,
                                TranslateY: 85.099998,
                                Unit: "EMU",
                            },
                        },
                        ObjectID: "excepturi",
                        Rows: 1454351304728694820,
                    },
                    CreateVideo: &shared.CreateVideoRequest{
                        ElementProperties: &shared.PageElementProperties{
                            PageObjectID: "distinctio",
                            Size: &shared.Size{
                                Height: &shared.Dimension{
                                    Magnitude: 96.099998,
                                    Unit: "PT",
                                },
                                Width: &shared.Dimension{
                                    Magnitude: 11.200000,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Transform: &shared.AffineTransform{
                                ScaleX: 62.099998,
                                ScaleY: 38.200001,
                                ShearX: 97.199997,
                                ShearY: 98.099998,
                                TranslateX: 9.200000,
                                TranslateY: 59.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                        },
                        ID: "voluptas",
                        ObjectID: "placeat",
                        Source: "DRIVE",
                    },
                    DeleteObject: &shared.DeleteObjectRequest{
                        ObjectID: "voluptate",
                    },
                    DeleteParagraphBullets: &shared.DeleteParagraphBulletsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 9128093316011588625,
                            RowIndex: 8538216581222554838,
                        },
                        ObjectID: "praesentium",
                        TextRange: &shared.Range{
                            EndIndex: 8969389201800069022,
                            StartIndex: 5652167882464335710,
                            Type: "FROM_START_INDEX",
                        },
                    },
                    DeleteTableColumn: &shared.DeleteTableColumnRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 4114836779377855555,
                            RowIndex: 5416331590569338403,
                        },
                        TableObjectID: "autem",
                    },
                    DeleteTableRow: &shared.DeleteTableRowRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 275289112235760504,
                            RowIndex: 4363797310786581912,
                        },
                        TableObjectID: "voluptate",
                    },
                    DeleteText: &shared.DeleteTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8667631553481974165,
                            RowIndex: 4961393487022594461,
                        },
                        ObjectID: "incidunt",
                        TextRange: &shared.Range{
                            EndIndex: 8942438308201148224,
                            StartIndex: 2056496640829951689,
                            Type: "ALL",
                        },
                    },
                    DuplicateObject: &shared.DuplicateObjectRequest{
                        ObjectID: "commodi",
                        ObjectIds: map[string]string{
                            "sed": "pariatur",
                        },
                    },
                    GroupObjects: &shared.GroupObjectsRequest{
                        ChildrenObjectIds: []string{
                            "minima",
                            "voluptatem",
                            "sapiente",
                        },
                        GroupObjectID: "et",
                    },
                    InsertTableColumns: &shared.InsertTableColumnsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8462435958871768855,
                            RowIndex: 3873327989389991279,
                        },
                        InsertRight: false,
                        Number: 2123091950249552974,
                        TableObjectID: "ut",
                    },
                    InsertTableRows: &shared.InsertTableRowsRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8489753372318784578,
                            RowIndex: 291663365006524027,
                        },
                        InsertBelow: true,
                        Number: 5842499702562799798,
                        TableObjectID: "omnis",
                    },
                    InsertText: &shared.InsertTextRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 439513275679668075,
                            RowIndex: 2799700021731961101,
                        },
                        InsertionIndex: 6642823146424394754,
                        ObjectID: "sint",
                        Text: "et",
                    },
                    MergeTableCells: &shared.MergeTableCellsRequest{
                        ObjectID: "debitis",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 2058983986735451081,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 2319182427077478158,
                                RowIndex: 593929477305317465,
                            },
                            RowSpan: 7770107104650922199,
                        },
                    },
                    RefreshSheetsChart: &shared.RefreshSheetsChartRequest{
                        ObjectID: "esse",
                    },
                    ReplaceAllShapesWithImage: &shared.ReplaceAllShapesWithImageRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "debitis",
                        },
                        ImageReplaceMethod: "IMAGE_REPLACE_METHOD_UNSPECIFIED",
                        ImageURL: "quod",
                        PageObjectIds: []string{
                            "molestiae",
                            "soluta",
                        },
                        ReplaceMethod: "CENTER_CROP",
                    },
                    ReplaceAllShapesWithSheetsChart: &shared.ReplaceAllShapesWithSheetsChartRequest{
                        ChartID: 4802422051045243320,
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: true,
                            Text: "laboriosam",
                        },
                        LinkingMode: "NOT_LINKED_IMAGE",
                        PageObjectIds: []string{
                            "est",
                            "nihil",
                        },
                        SpreadsheetID: "excepturi",
                    },
                    ReplaceAllText: &shared.ReplaceAllTextRequest{
                        ContainsText: &shared.SubstringMatchCriteria{
                            MatchCase: false,
                            Text: "corrupti",
                        },
                        PageObjectIds: []string{
                            "tempora",
                        },
                        ReplaceText: "temporibus",
                    },
                    ReplaceImage: &shared.ReplaceImageRequest{
                        ImageObjectID: "explicabo",
                        ImageReplaceMethod: "CENTER_INSIDE",
                        URL: "fugit",
                    },
                    RerouteLine: &shared.RerouteLineRequest{
                        ObjectID: "possimus",
                    },
                    UngroupObjects: &shared.UngroupObjectsRequest{
                        ObjectIds: []string{
                            "iure",
                            "quasi",
                            "aut",
                        },
                    },
                    UnmergeTableCells: &shared.UnmergeTableCellsRequest{
                        ObjectID: "ipsam",
                        TableRange: &shared.TableRange{
                            ColumnSpan: 6485346902768298460,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 5084119486654811769,
                                RowIndex: 3751860644395722023,
                            },
                            RowSpan: 5403918693028076812,
                        },
                    },
                    UpdateImageProperties: &shared.UpdateImagePropertiesRequest{
                        Fields: "tempore",
                        ImageProperties: &shared.ImageProperties{
                            Brightness: 4.100000,
                            Contrast: 22.200001,
                            CropProperties: &shared.CropProperties{
                                Angle: 94.099998,
                                BottomOffset: 24.200001,
                                LeftOffset: 15.100000,
                                RightOffset: 71.099998,
                                TopOffset: 90.099998,
                            },
                            Link: &shared.Link{
                                PageObjectID: "asperiores",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 5320300553641220446,
                                URL: "inventore",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "DASH",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 51.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 46.200001,
                                                Green: 40.200001,
                                                Red: 62.099998,
                                            },
                                            ThemeColor: "TEXT2",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 84.099998,
                                    Unit: "PT",
                                },
                            },
                            Recolor: &shared.Recolor{
                                Name: "LIGHT10",
                                RecolorStops: []shared.ColorStop{
                                    shared.ColorStop{
                                        Alpha: 71.199997,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 65.099998,
                                                Green: 65.199997,
                                                Red: 5.200000,
                                            },
                                            ThemeColor: "ACCENT5",
                                        },
                                        Position: 17.200001,
                                    },
                                    shared.ColorStop{
                                        Alpha: 60.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 14.200000,
                                                Green: 30.100000,
                                                Red: 82.199997,
                                            },
                                            ThemeColor: "LIGHT2",
                                        },
                                        Position: 50.200001,
                                    },
                                    shared.ColorStop{
                                        Alpha: 73.199997,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 99.199997,
                                                Green: 11.100000,
                                                Red: 44.200001,
                                            },
                                            ThemeColor: "TEXT2",
                                        },
                                        Position: 32.200001,
                                    },
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "LEFT_CENTER",
                                Alpha: 54.200001,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 56.200001,
                                    Unit: "EMU",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 0.100000,
                                        Green: 74.199997,
                                        Red: 82.199997,
                                    },
                                    ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                },
                                PropertyState: "RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 8.100000,
                                    ScaleY: 1.100000,
                                    ShearX: 97.199997,
                                    ShearY: 13.200000,
                                    TranslateX: 2.200000,
                                    TranslateY: 18.200001,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Type: "OUTER",
                            },
                            Transparency: 5.200000,
                        },
                        ObjectID: "et",
                    },
                    UpdateLineCategory: &shared.UpdateLineCategoryRequest{
                        LineCategory: "STRAIGHT",
                        ObjectID: "saepe",
                    },
                    UpdateLineProperties: &shared.UpdateLinePropertiesRequest{
                        Fields: "quis",
                        LineProperties: &shared.LineProperties{
                            DashStyle: "SOLID",
                            EndArrow: "OPEN_SQUARE",
                            EndConnection: &shared.LineConnection{
                                ConnectedObjectID: "molestias",
                                ConnectionSiteIndex: 4753809438213307351,
                            },
                            LineFill: &shared.LineFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 35.099998,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 41.200001,
                                            Green: 55.099998,
                                            Red: 6.100000,
                                        },
                                        ThemeColor: "LIGHT2",
                                    },
                                },
                            },
                            Link: &shared.Link{
                                PageObjectID: "hic",
                                RelativeLink: "RELATIVE_SLIDE_LINK_UNSPECIFIED",
                                SlideIndex: 5403992064409020394,
                                URL: "odio",
                            },
                            StartArrow: "FILL_SQUARE",
                            StartConnection: &shared.LineConnection{
                                ConnectedObjectID: "est",
                                ConnectionSiteIndex: 5649116748573825976,
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 60.200001,
                                Unit: "PT",
                            },
                        },
                        ObjectID: "et",
                    },
                    UpdatePageElementAltText: &shared.UpdatePageElementAltTextRequest{
                        Description: "vitae",
                        ObjectID: "ut",
                        Title: "dolor",
                    },
                    UpdatePageElementTransform: &shared.UpdatePageElementTransformRequest{
                        ApplyMode: "APPLY_MODE_UNSPECIFIED",
                        ObjectID: "et",
                        Transform: &shared.AffineTransform{
                            ScaleX: 80.099998,
                            ScaleY: 92.199997,
                            ShearX: 45.200001,
                            ShearY: 82.099998,
                            TranslateX: 89.199997,
                            TranslateY: 50.200001,
                            Unit: "EMU",
                        },
                    },
                    UpdatePageElementsZOrder: &shared.UpdatePageElementsZOrderRequest{
                        Operation: "SEND_BACKWARD",
                        PageElementObjectIds: []string{
                            "vitae",
                            "quia",
                        },
                    },
                    UpdatePageProperties: &shared.UpdatePagePropertiesRequest{
                        Fields: "dolores",
                        ObjectID: "non",
                        PageProperties: &shared.PageProperties{
                            ColorScheme: &shared.ColorScheme{
                                Colors: []shared.ThemeColorPair{
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 21.100000,
                                            Green: 39.099998,
                                            Red: 26.100000,
                                        },
                                        Type: "ACCENT2",
                                    },
                                    shared.ThemeColorPair{
                                        Color: &shared.RgbColor{
                                            Blue: 77.199997,
                                            Green: 84.199997,
                                            Red: 33.200001,
                                        },
                                        Type: "ACCENT3",
                                    },
                                },
                            },
                            PageBackgroundFill: &shared.PageBackgroundFill{
                                PropertyState: "INHERIT",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 78.099998,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 30.200001,
                                            Green: 80.199997,
                                            Red: 45.200001,
                                        },
                                        ThemeColor: "LIGHT2",
                                    },
                                },
                                StretchedPictureFill: &shared.StretchedPictureFill{
                                    ContentURL: "soluta",
                                    Size: &shared.Size{
                                        Height: &shared.Dimension{
                                            Magnitude: 54.200001,
                                            Unit: "EMU",
                                        },
                                        Width: &shared.Dimension{
                                            Magnitude: 86.199997,
                                            Unit: "PT",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    UpdateParagraphStyle: &shared.UpdateParagraphStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8283007054411788056,
                            RowIndex: 6392346161157208595,
                        },
                        Fields: "aspernatur",
                        ObjectID: "quia",
                        Style: &shared.ParagraphStyle{
                            Alignment: "ALIGNMENT_UNSPECIFIED",
                            Direction: "TEXT_DIRECTION_UNSPECIFIED",
                            IndentEnd: &shared.Dimension{
                                Magnitude: 74.199997,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            IndentFirstLine: &shared.Dimension{
                                Magnitude: 71.199997,
                                Unit: "EMU",
                            },
                            IndentStart: &shared.Dimension{
                                Magnitude: 94.199997,
                                Unit: "PT",
                            },
                            LineSpacing: 32.099998,
                            SpaceAbove: &shared.Dimension{
                                Magnitude: 20.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpaceBelow: &shared.Dimension{
                                Magnitude: 46.200001,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            SpacingMode: "NEVER_COLLAPSE",
                        },
                        TextRange: &shared.Range{
                            EndIndex: 1465524577445176,
                            StartIndex: 3749598124284455625,
                            Type: "FIXED_RANGE",
                        },
                    },
                    UpdateShapeProperties: &shared.UpdateShapePropertiesRequest{
                        Fields: "veniam",
                        ObjectID: "qui",
                        ShapeProperties: &shared.ShapeProperties{
                            Autofit: &shared.Autofit{
                                AutofitType: "TEXT_AUTOFIT",
                                FontScale: 35.099998,
                                LineSpacingReduction: 1.100000,
                            },
                            ContentAlignment: "TOP",
                            Link: &shared.Link{
                                PageObjectID: "earum",
                                RelativeLink: "LAST_SLIDE",
                                SlideIndex: 3904774084427647867,
                                URL: "ut",
                            },
                            Outline: &shared.Outline{
                                DashStyle: "LONG_DASH_DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 60.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 59.099998,
                                                Green: 30.100000,
                                                Red: 90.199997,
                                            },
                                            ThemeColor: "LIGHT1",
                                        },
                                    },
                                },
                                PropertyState: "NOT_RENDERED",
                                Weight: &shared.Dimension{
                                    Magnitude: 55.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                            },
                            Shadow: &shared.Shadow{
                                Alignment: "BOTTOM_CENTER",
                                Alpha: 90.199997,
                                BlurRadius: &shared.Dimension{
                                    Magnitude: 90.099998,
                                    Unit: "UNIT_UNSPECIFIED",
                                },
                                Color: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 21.100000,
                                        Green: 50.200001,
                                        Red: 89.099998,
                                    },
                                    ThemeColor: "LIGHT1",
                                },
                                PropertyState: "NOT_RENDERED",
                                RotateWithShape: false,
                                Transform: &shared.AffineTransform{
                                    ScaleX: 57.200001,
                                    ScaleY: 22.200001,
                                    ShearX: 96.199997,
                                    ShearY: 49.099998,
                                    TranslateX: 27.100000,
                                    TranslateY: 56.099998,
                                    Unit: "PT",
                                },
                                Type: "SHADOW_TYPE_UNSPECIFIED",
                            },
                            ShapeBackgroundFill: &shared.ShapeBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 86.199997,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 99.199997,
                                            Green: 19.200001,
                                            Red: 44.099998,
                                        },
                                        ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                    },
                                },
                            },
                        },
                    },
                    UpdateSlideProperties: &shared.UpdateSlidePropertiesRequest{
                        Fields: "et",
                        ObjectID: "ea",
                        SlideProperties: &shared.SlideProperties{
                            IsSkipped: false,
                            LayoutObjectID: "qui",
                            MasterObjectID: "et",
                            NotesPage: &shared.Page{
                            
                            },
                        },
                    },
                    UpdateSlidesPosition: &shared.UpdateSlidesPositionRequest{
                        InsertionIndex: 5535217212110569389,
                        SlideObjectIds: []string{
                            "et",
                            "eveniet",
                        },
                    },
                    UpdateTableBorderProperties: &shared.UpdateTableBorderPropertiesRequest{
                        BorderPosition: "LEFT",
                        Fields: "et",
                        ObjectID: "tenetur",
                        TableBorderProperties: &shared.TableBorderProperties{
                            DashStyle: "DASH",
                            TableBorderFill: &shared.TableBorderFill{
                                SolidFill: &shared.SolidFill{
                                    Alpha: 83.199997,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 50.099998,
                                            Green: 78.099998,
                                            Red: 62.099998,
                                        },
                                        ThemeColor: "ACCENT3",
                                    },
                                },
                            },
                            Weight: &shared.Dimension{
                                Magnitude: 57.099998,
                                Unit: "PT",
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 3922859791132572546,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 1396610286591386519,
                                RowIndex: 4342240267582167730,
                            },
                            RowSpan: 7321073256990245520,
                        },
                    },
                    UpdateTableCellProperties: &shared.UpdateTableCellPropertiesRequest{
                        Fields: "in",
                        ObjectID: "eveniet",
                        TableCellProperties: &shared.TableCellProperties{
                            ContentAlignment: "BOTTOM",
                            TableCellBackgroundFill: &shared.TableCellBackgroundFill{
                                PropertyState: "RENDERED",
                                SolidFill: &shared.SolidFill{
                                    Alpha: 10.100000,
                                    Color: &shared.OpaqueColor{
                                        RgbColor: &shared.RgbColor{
                                            Blue: 80.199997,
                                            Green: 64.199997,
                                            Red: 16.200001,
                                        },
                                        ThemeColor: "BACKGROUND1",
                                    },
                                },
                            },
                        },
                        TableRange: &shared.TableRange{
                            ColumnSpan: 3288954744603557144,
                            Location: &shared.TableCellLocation{
                                ColumnIndex: 7038266877095497271,
                                RowIndex: 1327857624535409792,
                            },
                            RowSpan: 4085067221554364343,
                        },
                    },
                    UpdateTableColumnProperties: &shared.UpdateTableColumnPropertiesRequest{
                        ColumnIndices: []int32{
                            231083836690476843,
                        },
                        Fields: "commodi",
                        ObjectID: "ut",
                        TableColumnProperties: &shared.TableColumnProperties{
                            ColumnWidth: &shared.Dimension{
                                Magnitude: 20.100000,
                                Unit: "EMU",
                            },
                        },
                    },
                    UpdateTableRowProperties: &shared.UpdateTableRowPropertiesRequest{
                        Fields: "non",
                        ObjectID: "minima",
                        RowIndices: []int32{
                            2024106265734698231,
                            6671357507052119919,
                            4908978009991088654,
                        },
                        TableRowProperties: &shared.TableRowProperties{
                            MinRowHeight: &shared.Dimension{
                                Magnitude: 2.100000,
                                Unit: "PT",
                            },
                        },
                    },
                    UpdateTextStyle: &shared.UpdateTextStyleRequest{
                        CellLocation: &shared.TableCellLocation{
                            ColumnIndex: 8168415176354109217,
                            RowIndex: 7075712041504403012,
                        },
                        Fields: "in",
                        ObjectID: "aut",
                        Style: &shared.TextStyle{
                            BackgroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 74.099998,
                                        Green: 30.200001,
                                        Red: 17.100000,
                                    },
                                    ThemeColor: "HYPERLINK",
                                },
                            },
                            BaselineOffset: "BASELINE_OFFSET_UNSPECIFIED",
                            Bold: false,
                            FontFamily: "animi",
                            FontSize: &shared.Dimension{
                                Magnitude: 4.200000,
                                Unit: "UNIT_UNSPECIFIED",
                            },
                            ForegroundColor: &shared.OptionalColor{
                                OpaqueColor: &shared.OpaqueColor{
                                    RgbColor: &shared.RgbColor{
                                        Blue: 99.099998,
                                        Green: 59.200001,
                                        Red: 41.200001,
                                    },
                                    ThemeColor: "THEME_COLOR_TYPE_UNSPECIFIED",
                                },
                            },
                            Italic: false,
                            Link: &shared.Link{
                                PageObjectID: "voluptatibus",
                                RelativeLink: "NEXT_SLIDE",
                                SlideIndex: 1669333273599120275,
                                URL: "illum",
                            },
                            SmallCaps: false,
                            Strikethrough: true,
                            Underline: true,
                            WeightedFontFamily: &shared.WeightedFontFamily{
                                FontFamily: "illum",
                                Weight: 7394850123376921792,
                            },
                        },
                        TextRange: &shared.Range{
                            EndIndex: 8127291500649900359,
                            StartIndex: 4125262407964932892,
                            Type: "ALL",
                        },
                    },
                    UpdateVideoProperties: &shared.UpdateVideoPropertiesRequest{
                        Fields: "consequatur",
                        ObjectID: "est",
                        VideoProperties: &shared.VideoProperties{
                            AutoPlay: false,
                            End: 5024863387575432216,
                            Mute: false,
                            Outline: &shared.Outline{
                                DashStyle: "DOT",
                                OutlineFill: &shared.OutlineFill{
                                    SolidFill: &shared.SolidFill{
                                        Alpha: 62.200001,
                                        Color: &shared.OpaqueColor{
                                            RgbColor: &shared.RgbColor{
                                                Blue: 40.099998,
                                                Green: 86.199997,
                                                Red: 89.199997,
                                            },
                                            ThemeColor: "FOLLOWED_HYPERLINK",
                                        },
                                    },
                                },
                                PropertyState: "INHERIT",
                                Weight: &shared.Dimension{
                                    Magnitude: 11.100000,
                                    Unit: "PT",
                                },
                            },
                            Start: 8945656186257497847,
                        },
                    },
                },
            },
            WriteControl: &shared.WriteControl{
                RequiredRevisionID: "perferendis",
            },
        },
    }
    
    res, err := s.Presentations.SlidesPresentationsBatchUpdate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdatePresentationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### presentations

* `SlidesPresentationsBatchUpdate` - Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
* `SlidesPresentationsCreate` - Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
* `SlidesPresentationsGet` - Gets the latest version of the specified presentation.
* `SlidesPresentationsPagesGet` - Gets the latest version of the specified page in the presentation.
* `SlidesPresentationsPagesGetThumbnail` - Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
