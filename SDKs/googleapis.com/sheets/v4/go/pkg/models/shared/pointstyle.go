package shared

type PointStyleShapeEnum string

const (
	PointStyleShapeEnumPointShapeUnspecified PointStyleShapeEnum = "POINT_SHAPE_UNSPECIFIED"
	PointStyleShapeEnumCircle                PointStyleShapeEnum = "CIRCLE"
	PointStyleShapeEnumDiamond               PointStyleShapeEnum = "DIAMOND"
	PointStyleShapeEnumHexagon               PointStyleShapeEnum = "HEXAGON"
	PointStyleShapeEnumPentagon              PointStyleShapeEnum = "PENTAGON"
	PointStyleShapeEnumSquare                PointStyleShapeEnum = "SQUARE"
	PointStyleShapeEnumStar                  PointStyleShapeEnum = "STAR"
	PointStyleShapeEnumTriangle              PointStyleShapeEnum = "TRIANGLE"
	PointStyleShapeEnumXMark                 PointStyleShapeEnum = "X_MARK"
)

type PointStyle struct {
	Shape *PointStyleShapeEnum `json:"shape"`
	Size  *float64             `json:"size"`
}
