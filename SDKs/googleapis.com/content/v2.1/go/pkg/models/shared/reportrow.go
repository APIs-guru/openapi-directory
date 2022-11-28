package shared

// ReportRow
// Result row returned from the search query.
type ReportRow struct {
	BestSellers          *BestSellers          `json:"bestSellers,omitempty"`
	Brand                *Brand                `json:"brand,omitempty"`
	Metrics              *Metrics              `json:"metrics,omitempty"`
	PriceCompetitiveness *PriceCompetitiveness `json:"priceCompetitiveness,omitempty"`
	PriceInsights        *PriceInsights        `json:"priceInsights,omitempty"`
	ProductCluster       *ProductCluster       `json:"productCluster,omitempty"`
	ProductView          *ProductView          `json:"productView,omitempty"`
	Segments             *Segments             `json:"segments,omitempty"`
}
